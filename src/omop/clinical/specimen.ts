import { date, datetime } from '../../_extended_generic'

export declare type Specimen = {
    specimen_id: number
    person_id: number
    specimen_concept_id: number
    specimen_type_concept_id: number
    specimen_date: date
    specimen_datetime: datetime
    quantity: number
    unit_concept_id: number
    anatomic_site_concept_id: number
    disease_status_concept_id: number
    specimen_source_id: string
    specimen_source_value: string
    unit_source_value: string
    anatomic_site_source_value: string
    disease_status_source_value: string
}
