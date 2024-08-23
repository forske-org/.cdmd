import { date } from '../../_extended_generic'

export declare type PayerPlanPeriod = {
    payer_plan_period_id: number
    person_id: number
    payer_plan_period_start_date: date
    payer_plan_period_end_date: date
    payer_concept_id: number
    payer_source_value: string
    payer_source_concept_id: number
    plan_concept_id: number
    plan_source_value: string
    plan_source_concept_id: number
    sponsor_concept_id: number
    sponsor_source_value: string
    sponsor_source_concept_id: number
    family_source_value: string
    stop_reson_concept_id: number
    stop_reason_source_value: string
    stop_reason_source_concept_id: number
}
