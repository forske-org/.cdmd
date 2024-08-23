import { date } from '../../_extended_generic'

export declare type DrugEra = {
    drug_era_id: number
    person_id: number
    drug_concept_id: number
    drug_era_start_date: date
    drug_era_end_date: date
    drug_exposure_count: number
    gap_days: number
}
