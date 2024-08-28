// These types are to extend the generics found at https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

export declare type datestring = `${number}-${number}-${number}`
export declare type date = Date | datestring
export declare type timestring = `${number}:${number}:${number}${''|`.${number}`}`
export declare type datetime = Date | `${datestring}${'T'|' '}${timestring}`

export declare let Object: Omit<ObjectConstructor, 'freeze'> & {
    freeze<T>(obj: T): ExtendedReadonly<T, false>
}

export declare type NeverSet<T> = T extends `set${infer Rem}`
    ? Rem extends Capitalize<Rem>
        ? never
        : T
    : T

export declare type ExtendedReadonly<T, Deep extends boolean = true> = {
    readonly [
        Key in keyof T as T[Key] extends Function
            ? NeverSet<Key>
            : Key
    ]: Deep extends true
        ? T[Key] extends object
            ? ExtendedReadonly<T[Key]>
            : T[Key]
        : T[Key]
}
