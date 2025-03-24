import { ServiceDatabaseModel } from '../database/service-database.model'

export type ServiceDomainModel = Omit<ServiceDatabaseModel, 'clinicId'>
