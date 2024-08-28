import { date, datetime } from '../../_extended_generic'

export declare type ConditionOccurrence = {
    condition_occurrence_id: number
    person_id: number
    condition_concept_id: number
    condition_start_date: date
    condition_start_datetime: datetime
    condition_end_date: date
    condition_end_datetime: datetime
    condition_type_concept_id: number
    condition_status_concept_id: number
    stop_reason: string
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    condition_source_value: string
    condition_source_concept_id: number
    condition_status_source_value: string
}
