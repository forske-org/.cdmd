import { date, datetime } from '../../_extended_generic'

export declare type VisitDetail = {
    visit_detail_id: number
    person_id: number
    visit_detail_concept_id: number
    visit_detail_start_date: date
    visit_detail_start_datetime: datetime
    visit_detail_end_date: date
    visit_detail_end_datetime: datetime
    visit_detail_type_concept_id: number
    provider_id: number
    care_site_id: number
    visit_detail_source_value: string
    visit_detail_source_concept_id: number
    admitted_from_concept_id: number
    admitted_from_source_value: string
    discharged_to_concept_id: number
    preceding_visit_detail_id: number
    parent_visit_detail_id: number
    visit_occurrence_id: number
}
