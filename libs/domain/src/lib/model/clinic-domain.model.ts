import { ControlType } from '@vet-client/lib-base-form'

interface ClinicDomainModel<T> {
  name: T
}

export type ClinicDomainFormDataModel = ClinicDomainModel<ControlType>

export type ClinicDomainDataModel = ClinicDomainModel<string>
