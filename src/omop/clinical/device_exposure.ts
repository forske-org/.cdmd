import { date, datetime } from '../../_extended_generic'

export declare type DeviceExposure = {
    device_exposure_id: number
    person_id: number
    device_concept_id: number
    device_exposure_start_date: date
    device_exposure_start_datetime: datetime
    device_exposure_end_date: date
    device_exposure_end_datetime: datetime
    device_type_concept_id: number
    unique_device_id: string
    production_id: string
    quantity: number
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    device_source_value: string
    device_source_concept_id: number
    unit_concept_id: number
    unit_source_value: string
    unit_source_concept_id: number
}
