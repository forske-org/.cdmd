import { date, datetime } from '../../_extended_generic'

export declare type VisitOccurrence = {
    visit_occurrence_id: number
    person_id: number
    visit_concept_id: number
    visit_start_date: date
    visit_start_datetime: datetime
    visit_end_date: date
    visit_end_datetime: datetime
    visit_tye_concept_id: number
    provider_id: number
    care_site_id: number
    visit_source_value: string
    visit_source_concept_id: number
    admitted_from_concept_id: number
    admitted_from_source_value: string
    discharged_to_concept_id: number
    discharged_to_source_value: string
    preceding_visit_occurrence_id: number
}
