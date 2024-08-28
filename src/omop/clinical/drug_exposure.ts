import { date, datetime } from '../../_extended_generic'

export declare type DrugExposure = {
    drug_exposure_id: number
    person_id: number
    drug_concept_id: number
    drug_exposure_start_date: date
    drug_exposure_start_datetime: datetime
    drug_exposure_end_date: date
    drug_exposure_end_datetime: datetime
    verbatim_end_date: date
    drug_type_concept_id: number
    stop_reason: string
    refills: number
    quantity: number
    days_supply: number
    sig: string
    route_concept_id: number
    lot_number: string
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    drug_source_value: string
    drug_source_concept_id: number
    route_source_value: string
    dose_unit_source_value: string
}
