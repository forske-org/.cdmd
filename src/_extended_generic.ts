export declare type datestring = `${number}-${number}-${number}`
export declare type date = Date | datestring
export declare type timestring = `${number}:${number}:${number}${''|`.${number}`}`
export declare type datetime = Date | `${datestring}${'T'|' '}${timestring}`
