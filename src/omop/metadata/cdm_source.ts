import { date } from '../../_extended_generic'

export declare type CdmSource = {
    cdm_source_name: string
    cdm_source_abbreviation: string
    cdm_holder: string
    source_description: string
    source_documentation_reference: string
    cdm_etl_reference: string
    source_release_date: date
    cdm_release_date: date
    cdm_version: string
    cdm_version_concept_id: number
    vocabulary_version: string
}
