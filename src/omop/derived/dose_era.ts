import { date } from '../../_extended_generic'

export declare type DoseEra = {
    dose_era_id: number
    person_id: number
    drug_concept_id: number
    unit_concept_id: number
    dose_value: number // Float
    dose_era_start_date: date
    dose_era_end_date: date
}
