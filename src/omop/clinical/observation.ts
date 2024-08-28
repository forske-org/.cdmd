import { date, datetime } from '../../_extended_generic'

export declare type Observation = {
    observation_id: number
    person_id: number
    observation_concept_id: number
    observation_date: date
    observation_datetime: datetime
    observation_type_concept_id: number
    value_as_number: number
    value_as_string: string
    value_as_concept_id: number
    qualifier_concept_id: number
    unit_concept_id: number
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    observation_source_value: string
    observation_source_concept_id: number
    unit_source_value: string
    qualifier_source_value: string
    value_source_value: string
    observation_event_id: number
    obs_event_field_concept_id: number
}
