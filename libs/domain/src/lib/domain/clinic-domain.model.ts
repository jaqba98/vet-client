import { ClinicDatabaseModel } from '../database/clinic-database.model'

export type ClinicDomainModel = Omit<ClinicDatabaseModel, 'openingHoursId'>
