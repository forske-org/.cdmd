import { date, datetime } from '../../_extended_generic'

export declare type Death = {
    person_id: number
    death_date: date
    death_datetime: datetime
    death_type_concept_id: number
    cause_concept_id: number
    cause_source_value: string
    cause_source_concept_id: number
}
