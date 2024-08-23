export declare type Cost = {
    cost_id: number
    cost_event_id: number
    cost_domain_id: string
    cost_type_concept_id: number
    currency_concept_id: number
    total_charge: number // Float
    total_cost: number // Float
    total_paid: number // Float
    paid_by_payer: number // Float
    paid_by_patient: number // Float
    paid_patient_copay: number // Float
    paid_patient_coinsurance: number // Float
    paid_patient_deductible: number // Float
    paid_by_primary: number // Float
    paid_ingredient_cost: number // Float
    paid_dispensing_fee: number // Float
    payer_plan_period_id: number
    amount_allowed: number // Float
    revenue_code_concept_id: number
    revenue_code_source_value: string
    drg_concept_id: number
    drg_source_value: string
}
