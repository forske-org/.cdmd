import { date, datetime } from '../../_extended_generic'

export declare type Note = {
    note_id: number
    person_id: number
    note_date: date
    note_datetime: datetime
    note_type_copncept_id: number
    note_class_concept_id: number
    note_title: string
    note_text: string
    encoding_concept_id: number
    language_concept_id: number
    provider_id: number
    visit_occurrence_id: number
    visit_detail_id: number
    note_source_value: string
    note_event_id: number
    note_event_field_concept_id: number
}
