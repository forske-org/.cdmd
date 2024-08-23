import { date } from '../../_extended_generic'

export declare type ConditionEra = {
    condition_era_id: number
    person_id: number
    condition_concept_id: number
    condition_era_start_date: date
    condition_era_end_date: date
    condition_occurrence_count: number
}
