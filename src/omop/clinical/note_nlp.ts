import { date, datetime } from '../../_extended_generic'

export declare type NoteNlp = {
    note_nlp_id: number
    note_id: number
    section_concept_id: number
    snippet: string
    offset: string
    lexical_variant: string
    note_nlp_concept_id: number
    note_nlp_source_concept_id: number
    nlp_system: string
    nlp_date: date
    nlp_datetime: datetime
    term_exists: string
    term_temporal: string
    term_modifiers: string
}
