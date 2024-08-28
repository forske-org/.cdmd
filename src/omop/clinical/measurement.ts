import { date, datetime } from '../../_extended_generic'

export declare type Measurement = {
    measurement_id: number
    person_id: number
    measurement_concept_id: number
    measurement_date: date
    measurement_datetime: datetime
    measurement_time: string
    measurement_type_concept_id: number
    operator_concept_id: number
    value_as_number: number
    value_as_concept_id: number
    unit_concept_id: number
    range_low: number
    range_high: number
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    measurement_source_value: string
    measurement_source_concept_id: number
    unit_source_value: string
    unit_source_concept_id: number
    value_source_value: string
    measurement_event_id: number
    meas_event_field_concept_id: number
}
