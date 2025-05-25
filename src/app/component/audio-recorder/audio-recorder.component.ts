import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'audio-recorder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-recorder.component.html'
})
export class AudioRecorderComponent {
  private mediaRecorder!: MediaRecorder;
  private audioChunks: Blob[] = [];

  isRecording = false;
  audioUrl: string | null = null;
  transcribedText: any | null = 'Pies rasy Labrador Retriever, 5 lat, samiec, zgłaszany z objawami: apatia, brak apetytu trwający 3 dni, nawracające wymioty, biegunka o luźnej konsystencji, gorączka 39,5°C, nieznaczna odwodnienie. W badaniu klinicznym stwierdzono obniżony odruch ssania, suchą błonę śluzową jamy ustnej oraz nieznaczne powiększenie węzłów chłonnych. Badania laboratoryjne wykazały leukocytozę (WBC 18 000/μl) z przewagą neutrofili, co sugeruje aktywny proces zapalny. W badaniu kału potwierdzono obecność pasożytów jelitowych – Toxocara canis. Ultrasonografia jamy brzusznej wykazała nieznaczne powiększenie wątroby i śledziony, bez widocznych ognisk martwicy czy zmian ogniskowych.\n' +
    '\n' +
    'Rozpoznanie: infekcyjne zapalenie jelit wtórne do inwazji pasożytów jelitowych (Toxocara canis), prowadzące do ostrego stanu zapalnego przewodu pokarmowego.\n' +
    '\n' +
    'Zalecenia terapeutyczne: podanie fenbendazolu w dawce 50 mg/kg przez 3 dni jako lek przeciwpasożytniczy; wprowadzenie diety lekkostrawnej, bogatej w łatwo przyswajalne białka i węglowodany, podawanej w małych porcjach, aby zmniejszyć podrażnienie przewodu pokarmowego; intensywne nawadnianie doustne lub dożylne w przypadku znacznego odwodnienia; kontrola kliniczna i laboratoryjna po 7 dniach celem oceny skuteczności leczenia oraz ewentualnej modyfikacji terapii; w przypadku utrzymania się lub nasilenia objawów (np. przedłużających się wymiotów, krwistej biegunki, wzrostu temperatury ciała) wskazana jest ponowna konsultacja i dalsza diagnostyka, w tym możliwość wykonania posiewu bakteriologicznego lub biopsji jelit.\n' +
    '\n' +
    'Dodatkowo zaleca się profilaktykę przeciwpasożytniczą co najmniej 2 razy w roku oraz regularne badania kału, aby zapobiec nawrotom inwazji. W przypadku obecności innych zwierząt w gospodarstwie warto przeprowadzić badania przesiewowe i ewentualne leczenie także ich.';

  analysisResult: any;

  constructor(private ngZone: NgZone, private http: HttpClient) {}

  startRecording() {
    this.audioUrl = null;
    this.transcribedText = null;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
        this.mediaRecorder = new MediaRecorder(stream, { mimeType });
        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: this.mediaRecorder.mimeType });
          if (audioBlob.size > 0) {
            const url = URL.createObjectURL(audioBlob);
            this.ngZone.run(() => {
              this.audioUrl = url;
              this.sendAudioToBackend(audioBlob);
            });
          }
        };

        this.mediaRecorder.start();
        this.isRecording = true;
      })
      .catch(err => {
        console.error('Błąd mikrofonu:', err);
      });
  }

  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.requestData();
      setTimeout(() => {
        if (this.mediaRecorder.state !== 'inactive') {
          this.mediaRecorder.stop();
        }
        this.isRecording = false;
      }, 200);
    }
  }

  sendAudioToBackend(blob: Blob) {
    const formData = new FormData();
    formData.append('file', blob, 'audio.webm');

    this.http.post('http://localhost:8080/api/speech-to-text', formData, { responseType: 'text' })
      .subscribe({
        next: response => {
          const result = JSON.parse(response);
          this.transcribedText = result.DisplayText;

          // od razu analizujemy tekst przez drugi request
          const analyzeUrl = 'http://localhost:8080/api/analyze';
          const analyzePayload = { text: this.transcribedText };

          this.http.post<any>(analyzeUrl, analyzePayload).subscribe({
            next: analysis => {
              console.log('Wynik analizy tekstu:', analysis);
              this.analysisResult = analysis; // Możesz użyć tej zmiennej w szablonie
            },
            error: err => {
              console.error('Błąd analizy tekstu:', err);
            }
          });
        },
        error: err => {
          this.transcribedText = 'Błąd podczas rozpoznawania mowy.';
          console.error(err);
        }
      });
  }


  aaa() {
    // od razu analizujemy tekst przez drugi request
    const analyzeUrl = 'http://localhost:8080/api/analyze';
    const analyzePayload = { text: this.transcribedText };

    this.http.post<any>(analyzeUrl, analyzePayload).subscribe({
      next: analysis => {
        console.log('Wynik analizy tekstu:', analysis);
        this.analysisResult = analysis; // Możesz użyć tej zmiennej w szablonie
      },
      error: err => {
        console.error('Błąd analizy tekstu:', err);
      }
    });
  }
}
