import { Core } from '../_meta'

export declare type DrugStrength = Core & {
    drug_concept_id: number
    ingredient_concept_id: number
    amount_value: number // Float
    amount_unit_concept_id: string
    numerator_value: number // Float
    numerator_unit_concept_id: number
    denominator_value: number // Float
    denominator_unit_concept_id: number
    box_size: number
}
