
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Subsection
 * 
 */
export type Subsection = $Result.DefaultSelection<Prisma.$SubsectionPayload>
/**
 * Model SubsectionContent
 * 
 */
export type SubsectionContent = $Result.DefaultSelection<Prisma.$SubsectionContentPayload>
/**
 * Model BulletPoint
 * 
 */
export type BulletPoint = $Result.DefaultSelection<Prisma.$BulletPointPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SectionType: {
  GUIDE: 'GUIDE',
  PRESENTATION: 'PRESENTATION',
  INFORMATIONS: 'INFORMATIONS',
  QUE_FAIRE: 'QUE_FAIRE',
  COMMENT_Y_ALLER: 'COMMENT_Y_ALLER',
  FORMALITES: 'FORMALITES',
  CONSEILS: 'CONSEILS',
  POURQUOI_Y_ALLER: 'POURQUOI_Y_ALLER'
};

export type SectionType = (typeof SectionType)[keyof typeof SectionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SectionType = $Enums.SectionType

export const SectionType: typeof $Enums.SectionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subsection`: Exposes CRUD operations for the **Subsection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subsections
    * const subsections = await prisma.subsection.findMany()
    * ```
    */
  get subsection(): Prisma.SubsectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subsectionContent`: Exposes CRUD operations for the **SubsectionContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubsectionContents
    * const subsectionContents = await prisma.subsectionContent.findMany()
    * ```
    */
  get subsectionContent(): Prisma.SubsectionContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletPoint`: Exposes CRUD operations for the **BulletPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulletPoints
    * const bulletPoints = await prisma.bulletPoint.findMany()
    * ```
    */
  get bulletPoint(): Prisma.BulletPointDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Destination: 'Destination',
    Section: 'Section',
    Image: 'Image',
    Subsection: 'Subsection',
    SubsectionContent: 'SubsectionContent',
    BulletPoint: 'BulletPoint'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "destination" | "section" | "image" | "subsection" | "subsectionContent" | "bulletPoint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Subsection: {
        payload: Prisma.$SubsectionPayload<ExtArgs>
        fields: Prisma.SubsectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubsectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubsectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          findFirst: {
            args: Prisma.SubsectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubsectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          findMany: {
            args: Prisma.SubsectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>[]
          }
          create: {
            args: Prisma.SubsectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          createMany: {
            args: Prisma.SubsectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubsectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          update: {
            args: Prisma.SubsectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          deleteMany: {
            args: Prisma.SubsectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubsectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubsectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionPayload>
          }
          aggregate: {
            args: Prisma.SubsectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubsection>
          }
          groupBy: {
            args: Prisma.SubsectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubsectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubsectionCountArgs<ExtArgs>
            result: $Utils.Optional<SubsectionCountAggregateOutputType> | number
          }
        }
      }
      SubsectionContent: {
        payload: Prisma.$SubsectionContentPayload<ExtArgs>
        fields: Prisma.SubsectionContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubsectionContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubsectionContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>
          }
          findFirst: {
            args: Prisma.SubsectionContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubsectionContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>
          }
          findMany: {
            args: Prisma.SubsectionContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>[]
          }
          create: {
            args: Prisma.SubsectionContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>
          }
          createMany: {
            args: Prisma.SubsectionContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubsectionContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>
          }
          update: {
            args: Prisma.SubsectionContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>
          }
          deleteMany: {
            args: Prisma.SubsectionContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubsectionContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubsectionContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsectionContentPayload>
          }
          aggregate: {
            args: Prisma.SubsectionContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubsectionContent>
          }
          groupBy: {
            args: Prisma.SubsectionContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubsectionContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubsectionContentCountArgs<ExtArgs>
            result: $Utils.Optional<SubsectionContentCountAggregateOutputType> | number
          }
        }
      }
      BulletPoint: {
        payload: Prisma.$BulletPointPayload<ExtArgs>
        fields: Prisma.BulletPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          findFirst: {
            args: Prisma.BulletPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          findMany: {
            args: Prisma.BulletPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>[]
          }
          create: {
            args: Prisma.BulletPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          createMany: {
            args: Prisma.BulletPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BulletPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          update: {
            args: Prisma.BulletPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          deleteMany: {
            args: Prisma.BulletPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BulletPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          aggregate: {
            args: Prisma.BulletPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletPoint>
          }
          groupBy: {
            args: Prisma.BulletPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletPointCountArgs<ExtArgs>
            result: $Utils.Optional<BulletPointCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    destination?: DestinationOmit
    section?: SectionOmit
    image?: ImageOmit
    subsection?: SubsectionOmit
    subsectionContent?: SubsectionContentOmit
    bulletPoint?: BulletPointOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    sections: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | DestinationCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    subsections: number
    bulletPoints: number
    images: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subsections?: boolean | SectionCountOutputTypeCountSubsectionsArgs
    bulletPoints?: boolean | SectionCountOutputTypeCountBulletPointsArgs
    images?: boolean | SectionCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountSubsectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountBulletPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletPointWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type SubsectionCountOutputType
   */

  export type SubsectionCountOutputType = {
    contents: number
  }

  export type SubsectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | SubsectionCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * SubsectionCountOutputType without action
   */
  export type SubsectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionCountOutputType
     */
    select?: SubsectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubsectionCountOutputType without action
   */
  export type SubsectionCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionContentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    titre: string | null
    pays: string | null
    continent: string | null
    description: string | null
    imagePrincipale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    pays: string | null
    continent: string | null
    description: string | null
    imagePrincipale: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    titre: number
    pays: number
    continent: number
    description: number
    imagePrincipale: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DestinationMinAggregateInputType = {
    id?: true
    titre?: true
    pays?: true
    continent?: true
    description?: true
    imagePrincipale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    titre?: true
    pays?: true
    continent?: true
    description?: true
    imagePrincipale?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    titre?: true
    pays?: true
    continent?: true
    description?: true
    imagePrincipale?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    titre: string
    pays: string
    continent: string | null
    description: string | null
    imagePrincipale: string | null
    createdAt: Date
    updatedAt: Date
    _count: DestinationCountAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    pays?: boolean
    continent?: boolean
    description?: boolean
    imagePrincipale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sections?: boolean | Destination$sectionsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>



  export type DestinationSelectScalar = {
    id?: boolean
    titre?: boolean
    pays?: boolean
    continent?: boolean
    description?: boolean
    imagePrincipale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "pays" | "continent" | "description" | "imagePrincipale" | "createdAt" | "updatedAt", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Destination$sectionsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      pays: string
      continent: string | null
      description: string | null
      imagePrincipale: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Destination$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly titre: FieldRef<"Destination", 'String'>
    readonly pays: FieldRef<"Destination", 'String'>
    readonly continent: FieldRef<"Destination", 'String'>
    readonly description: FieldRef<"Destination", 'String'>
    readonly imagePrincipale: FieldRef<"Destination", 'String'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.sections
   */
  export type Destination$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    ordre: number | null
  }

  export type SectionSumAggregateOutputType = {
    ordre: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    titre: string | null
    contenu: string | null
    ordre: number | null
    type: $Enums.SectionType | null
    destinationId: string | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    contenu: string | null
    ordre: number | null
    type: $Enums.SectionType | null
    destinationId: string | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    titre: number
    contenu: number
    ordre: number
    type: number
    destinationId: number
    updatedAt: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    ordre?: true
  }

  export type SectionSumAggregateInputType = {
    ordre?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    ordre?: true
    type?: true
    destinationId?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    ordre?: true
    type?: true
    destinationId?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    ordre?: true
    type?: true
    destinationId?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    ordre?: boolean
    type?: boolean
    destinationId?: boolean
    updatedAt?: boolean
    subsections?: boolean | Section$subsectionsArgs<ExtArgs>
    bulletPoints?: boolean | Section$bulletPointsArgs<ExtArgs>
    images?: boolean | Section$imagesArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>



  export type SectionSelectScalar = {
    id?: boolean
    titre?: boolean
    contenu?: boolean
    ordre?: boolean
    type?: boolean
    destinationId?: boolean
    updatedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "contenu" | "ordre" | "type" | "destinationId" | "updatedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subsections?: boolean | Section$subsectionsArgs<ExtArgs>
    bulletPoints?: boolean | Section$bulletPointsArgs<ExtArgs>
    images?: boolean | Section$imagesArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      subsections: Prisma.$SubsectionPayload<ExtArgs>[]
      bulletPoints: Prisma.$BulletPointPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      contenu: string
      ordre: number
      type: $Enums.SectionType
      destinationId: string
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subsections<T extends Section$subsectionsArgs<ExtArgs> = {}>(args?: Subset<T, Section$subsectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bulletPoints<T extends Section$bulletPointsArgs<ExtArgs> = {}>(args?: Subset<T, Section$bulletPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Section$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Section$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly titre: FieldRef<"Section", 'String'>
    readonly contenu: FieldRef<"Section", 'String'>
    readonly ordre: FieldRef<"Section", 'Int'>
    readonly type: FieldRef<"Section", 'SectionType'>
    readonly destinationId: FieldRef<"Section", 'String'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.subsections
   */
  export type Section$subsectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    where?: SubsectionWhereInput
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    cursor?: SubsectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Section.bulletPoints
   */
  export type Section$bulletPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    where?: BulletPointWhereInput
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    cursor?: BulletPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * Section.images
   */
  export type Section$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    sectionId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    sectionId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    sectionId: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sectionId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sectionId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sectionId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    alt: string | null
    sectionId: string
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    sectionId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "sectionId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt: string | null
      sectionId: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly sectionId: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Subsection
   */

  export type AggregateSubsection = {
    _count: SubsectionCountAggregateOutputType | null
    _avg: SubsectionAvgAggregateOutputType | null
    _sum: SubsectionSumAggregateOutputType | null
    _min: SubsectionMinAggregateOutputType | null
    _max: SubsectionMaxAggregateOutputType | null
  }

  export type SubsectionAvgAggregateOutputType = {
    ordre: number | null
  }

  export type SubsectionSumAggregateOutputType = {
    ordre: number | null
  }

  export type SubsectionMinAggregateOutputType = {
    id: string | null
    titre: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type SubsectionMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type SubsectionCountAggregateOutputType = {
    id: number
    titre: number
    ordre: number
    sectionId: number
    _all: number
  }


  export type SubsectionAvgAggregateInputType = {
    ordre?: true
  }

  export type SubsectionSumAggregateInputType = {
    ordre?: true
  }

  export type SubsectionMinAggregateInputType = {
    id?: true
    titre?: true
    ordre?: true
    sectionId?: true
  }

  export type SubsectionMaxAggregateInputType = {
    id?: true
    titre?: true
    ordre?: true
    sectionId?: true
  }

  export type SubsectionCountAggregateInputType = {
    id?: true
    titre?: true
    ordre?: true
    sectionId?: true
    _all?: true
  }

  export type SubsectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subsection to aggregate.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subsections
    **/
    _count?: true | SubsectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubsectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubsectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubsectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubsectionMaxAggregateInputType
  }

  export type GetSubsectionAggregateType<T extends SubsectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubsection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubsection[P]>
      : GetScalarType<T[P], AggregateSubsection[P]>
  }




  export type SubsectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionWhereInput
    orderBy?: SubsectionOrderByWithAggregationInput | SubsectionOrderByWithAggregationInput[]
    by: SubsectionScalarFieldEnum[] | SubsectionScalarFieldEnum
    having?: SubsectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubsectionCountAggregateInputType | true
    _avg?: SubsectionAvgAggregateInputType
    _sum?: SubsectionSumAggregateInputType
    _min?: SubsectionMinAggregateInputType
    _max?: SubsectionMaxAggregateInputType
  }

  export type SubsectionGroupByOutputType = {
    id: string
    titre: string
    ordre: number
    sectionId: string
    _count: SubsectionCountAggregateOutputType | null
    _avg: SubsectionAvgAggregateOutputType | null
    _sum: SubsectionSumAggregateOutputType | null
    _min: SubsectionMinAggregateOutputType | null
    _max: SubsectionMaxAggregateOutputType | null
  }

  type GetSubsectionGroupByPayload<T extends SubsectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubsectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubsectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubsectionGroupByOutputType[P]>
            : GetScalarType<T[P], SubsectionGroupByOutputType[P]>
        }
      >
    >


  export type SubsectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    ordre?: boolean
    sectionId?: boolean
    contents?: boolean | Subsection$contentsArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    _count?: boolean | SubsectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsection"]>



  export type SubsectionSelectScalar = {
    id?: boolean
    titre?: boolean
    ordre?: boolean
    sectionId?: boolean
  }

  export type SubsectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "ordre" | "sectionId", ExtArgs["result"]["subsection"]>
  export type SubsectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | Subsection$contentsArgs<ExtArgs>
    section?: boolean | SectionDefaultArgs<ExtArgs>
    _count?: boolean | SubsectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubsectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subsection"
    objects: {
      contents: Prisma.$SubsectionContentPayload<ExtArgs>[]
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      ordre: number
      sectionId: string
    }, ExtArgs["result"]["subsection"]>
    composites: {}
  }

  type SubsectionGetPayload<S extends boolean | null | undefined | SubsectionDefaultArgs> = $Result.GetResult<Prisma.$SubsectionPayload, S>

  type SubsectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubsectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubsectionCountAggregateInputType | true
    }

  export interface SubsectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subsection'], meta: { name: 'Subsection' } }
    /**
     * Find zero or one Subsection that matches the filter.
     * @param {SubsectionFindUniqueArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubsectionFindUniqueArgs>(args: SelectSubset<T, SubsectionFindUniqueArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subsection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubsectionFindUniqueOrThrowArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubsectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubsectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subsection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionFindFirstArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubsectionFindFirstArgs>(args?: SelectSubset<T, SubsectionFindFirstArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subsection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionFindFirstOrThrowArgs} args - Arguments to find a Subsection
     * @example
     * // Get one Subsection
     * const subsection = await prisma.subsection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubsectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubsectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subsections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subsections
     * const subsections = await prisma.subsection.findMany()
     * 
     * // Get first 10 Subsections
     * const subsections = await prisma.subsection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subsectionWithIdOnly = await prisma.subsection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubsectionFindManyArgs>(args?: SelectSubset<T, SubsectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subsection.
     * @param {SubsectionCreateArgs} args - Arguments to create a Subsection.
     * @example
     * // Create one Subsection
     * const Subsection = await prisma.subsection.create({
     *   data: {
     *     // ... data to create a Subsection
     *   }
     * })
     * 
     */
    create<T extends SubsectionCreateArgs>(args: SelectSubset<T, SubsectionCreateArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subsections.
     * @param {SubsectionCreateManyArgs} args - Arguments to create many Subsections.
     * @example
     * // Create many Subsections
     * const subsection = await prisma.subsection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubsectionCreateManyArgs>(args?: SelectSubset<T, SubsectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subsection.
     * @param {SubsectionDeleteArgs} args - Arguments to delete one Subsection.
     * @example
     * // Delete one Subsection
     * const Subsection = await prisma.subsection.delete({
     *   where: {
     *     // ... filter to delete one Subsection
     *   }
     * })
     * 
     */
    delete<T extends SubsectionDeleteArgs>(args: SelectSubset<T, SubsectionDeleteArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subsection.
     * @param {SubsectionUpdateArgs} args - Arguments to update one Subsection.
     * @example
     * // Update one Subsection
     * const subsection = await prisma.subsection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubsectionUpdateArgs>(args: SelectSubset<T, SubsectionUpdateArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subsections.
     * @param {SubsectionDeleteManyArgs} args - Arguments to filter Subsections to delete.
     * @example
     * // Delete a few Subsections
     * const { count } = await prisma.subsection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubsectionDeleteManyArgs>(args?: SelectSubset<T, SubsectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subsections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subsections
     * const subsection = await prisma.subsection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubsectionUpdateManyArgs>(args: SelectSubset<T, SubsectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subsection.
     * @param {SubsectionUpsertArgs} args - Arguments to update or create a Subsection.
     * @example
     * // Update or create a Subsection
     * const subsection = await prisma.subsection.upsert({
     *   create: {
     *     // ... data to create a Subsection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subsection we want to update
     *   }
     * })
     */
    upsert<T extends SubsectionUpsertArgs>(args: SelectSubset<T, SubsectionUpsertArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subsections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionCountArgs} args - Arguments to filter Subsections to count.
     * @example
     * // Count the number of Subsections
     * const count = await prisma.subsection.count({
     *   where: {
     *     // ... the filter for the Subsections we want to count
     *   }
     * })
    **/
    count<T extends SubsectionCountArgs>(
      args?: Subset<T, SubsectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubsectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subsection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubsectionAggregateArgs>(args: Subset<T, SubsectionAggregateArgs>): Prisma.PrismaPromise<GetSubsectionAggregateType<T>>

    /**
     * Group by Subsection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubsectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubsectionGroupByArgs['orderBy'] }
        : { orderBy?: SubsectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubsectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubsectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subsection model
   */
  readonly fields: SubsectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subsection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubsectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contents<T extends Subsection$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Subsection$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subsection model
   */
  interface SubsectionFieldRefs {
    readonly id: FieldRef<"Subsection", 'String'>
    readonly titre: FieldRef<"Subsection", 'String'>
    readonly ordre: FieldRef<"Subsection", 'Int'>
    readonly sectionId: FieldRef<"Subsection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subsection findUnique
   */
  export type SubsectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection findUniqueOrThrow
   */
  export type SubsectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection findFirst
   */
  export type SubsectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subsections.
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subsections.
     */
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Subsection findFirstOrThrow
   */
  export type SubsectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsection to fetch.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subsections.
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subsections.
     */
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Subsection findMany
   */
  export type SubsectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter, which Subsections to fetch.
     */
    where?: SubsectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subsections to fetch.
     */
    orderBy?: SubsectionOrderByWithRelationInput | SubsectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subsections.
     */
    cursor?: SubsectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subsections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subsections.
     */
    skip?: number
    distinct?: SubsectionScalarFieldEnum | SubsectionScalarFieldEnum[]
  }

  /**
   * Subsection create
   */
  export type SubsectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subsection.
     */
    data: XOR<SubsectionCreateInput, SubsectionUncheckedCreateInput>
  }

  /**
   * Subsection createMany
   */
  export type SubsectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subsections.
     */
    data: SubsectionCreateManyInput | SubsectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subsection update
   */
  export type SubsectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subsection.
     */
    data: XOR<SubsectionUpdateInput, SubsectionUncheckedUpdateInput>
    /**
     * Choose, which Subsection to update.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection updateMany
   */
  export type SubsectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subsections.
     */
    data: XOR<SubsectionUpdateManyMutationInput, SubsectionUncheckedUpdateManyInput>
    /**
     * Filter which Subsections to update
     */
    where?: SubsectionWhereInput
    /**
     * Limit how many Subsections to update.
     */
    limit?: number
  }

  /**
   * Subsection upsert
   */
  export type SubsectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subsection to update in case it exists.
     */
    where: SubsectionWhereUniqueInput
    /**
     * In case the Subsection found by the `where` argument doesn't exist, create a new Subsection with this data.
     */
    create: XOR<SubsectionCreateInput, SubsectionUncheckedCreateInput>
    /**
     * In case the Subsection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubsectionUpdateInput, SubsectionUncheckedUpdateInput>
  }

  /**
   * Subsection delete
   */
  export type SubsectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
    /**
     * Filter which Subsection to delete.
     */
    where: SubsectionWhereUniqueInput
  }

  /**
   * Subsection deleteMany
   */
  export type SubsectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subsections to delete
     */
    where?: SubsectionWhereInput
    /**
     * Limit how many Subsections to delete.
     */
    limit?: number
  }

  /**
   * Subsection.contents
   */
  export type Subsection$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    where?: SubsectionContentWhereInput
    orderBy?: SubsectionContentOrderByWithRelationInput | SubsectionContentOrderByWithRelationInput[]
    cursor?: SubsectionContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubsectionContentScalarFieldEnum | SubsectionContentScalarFieldEnum[]
  }

  /**
   * Subsection without action
   */
  export type SubsectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subsection
     */
    select?: SubsectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subsection
     */
    omit?: SubsectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionInclude<ExtArgs> | null
  }


  /**
   * Model SubsectionContent
   */

  export type AggregateSubsectionContent = {
    _count: SubsectionContentCountAggregateOutputType | null
    _avg: SubsectionContentAvgAggregateOutputType | null
    _sum: SubsectionContentSumAggregateOutputType | null
    _min: SubsectionContentMinAggregateOutputType | null
    _max: SubsectionContentMaxAggregateOutputType | null
  }

  export type SubsectionContentAvgAggregateOutputType = {
    ordre: number | null
  }

  export type SubsectionContentSumAggregateOutputType = {
    ordre: number | null
  }

  export type SubsectionContentMinAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    subsectionId: string | null
  }

  export type SubsectionContentMaxAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    subsectionId: string | null
  }

  export type SubsectionContentCountAggregateOutputType = {
    id: number
    contenu: number
    ordre: number
    subsectionId: number
    _all: number
  }


  export type SubsectionContentAvgAggregateInputType = {
    ordre?: true
  }

  export type SubsectionContentSumAggregateInputType = {
    ordre?: true
  }

  export type SubsectionContentMinAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    subsectionId?: true
  }

  export type SubsectionContentMaxAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    subsectionId?: true
  }

  export type SubsectionContentCountAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    subsectionId?: true
    _all?: true
  }

  export type SubsectionContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubsectionContent to aggregate.
     */
    where?: SubsectionContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsectionContents to fetch.
     */
    orderBy?: SubsectionContentOrderByWithRelationInput | SubsectionContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubsectionContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsectionContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsectionContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubsectionContents
    **/
    _count?: true | SubsectionContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubsectionContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubsectionContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubsectionContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubsectionContentMaxAggregateInputType
  }

  export type GetSubsectionContentAggregateType<T extends SubsectionContentAggregateArgs> = {
        [P in keyof T & keyof AggregateSubsectionContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubsectionContent[P]>
      : GetScalarType<T[P], AggregateSubsectionContent[P]>
  }




  export type SubsectionContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsectionContentWhereInput
    orderBy?: SubsectionContentOrderByWithAggregationInput | SubsectionContentOrderByWithAggregationInput[]
    by: SubsectionContentScalarFieldEnum[] | SubsectionContentScalarFieldEnum
    having?: SubsectionContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubsectionContentCountAggregateInputType | true
    _avg?: SubsectionContentAvgAggregateInputType
    _sum?: SubsectionContentSumAggregateInputType
    _min?: SubsectionContentMinAggregateInputType
    _max?: SubsectionContentMaxAggregateInputType
  }

  export type SubsectionContentGroupByOutputType = {
    id: string
    contenu: string
    ordre: number
    subsectionId: string
    _count: SubsectionContentCountAggregateOutputType | null
    _avg: SubsectionContentAvgAggregateOutputType | null
    _sum: SubsectionContentSumAggregateOutputType | null
    _min: SubsectionContentMinAggregateOutputType | null
    _max: SubsectionContentMaxAggregateOutputType | null
  }

  type GetSubsectionContentGroupByPayload<T extends SubsectionContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubsectionContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubsectionContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubsectionContentGroupByOutputType[P]>
            : GetScalarType<T[P], SubsectionContentGroupByOutputType[P]>
        }
      >
    >


  export type SubsectionContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    subsectionId?: boolean
    subsection?: boolean | SubsectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsectionContent"]>



  export type SubsectionContentSelectScalar = {
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    subsectionId?: boolean
  }

  export type SubsectionContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "ordre" | "subsectionId", ExtArgs["result"]["subsectionContent"]>
  export type SubsectionContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subsection?: boolean | SubsectionDefaultArgs<ExtArgs>
  }

  export type $SubsectionContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubsectionContent"
    objects: {
      subsection: Prisma.$SubsectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenu: string
      ordre: number
      subsectionId: string
    }, ExtArgs["result"]["subsectionContent"]>
    composites: {}
  }

  type SubsectionContentGetPayload<S extends boolean | null | undefined | SubsectionContentDefaultArgs> = $Result.GetResult<Prisma.$SubsectionContentPayload, S>

  type SubsectionContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubsectionContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubsectionContentCountAggregateInputType | true
    }

  export interface SubsectionContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubsectionContent'], meta: { name: 'SubsectionContent' } }
    /**
     * Find zero or one SubsectionContent that matches the filter.
     * @param {SubsectionContentFindUniqueArgs} args - Arguments to find a SubsectionContent
     * @example
     * // Get one SubsectionContent
     * const subsectionContent = await prisma.subsectionContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubsectionContentFindUniqueArgs>(args: SelectSubset<T, SubsectionContentFindUniqueArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubsectionContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubsectionContentFindUniqueOrThrowArgs} args - Arguments to find a SubsectionContent
     * @example
     * // Get one SubsectionContent
     * const subsectionContent = await prisma.subsectionContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubsectionContentFindUniqueOrThrowArgs>(args: SelectSubset<T, SubsectionContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubsectionContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentFindFirstArgs} args - Arguments to find a SubsectionContent
     * @example
     * // Get one SubsectionContent
     * const subsectionContent = await prisma.subsectionContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubsectionContentFindFirstArgs>(args?: SelectSubset<T, SubsectionContentFindFirstArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubsectionContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentFindFirstOrThrowArgs} args - Arguments to find a SubsectionContent
     * @example
     * // Get one SubsectionContent
     * const subsectionContent = await prisma.subsectionContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubsectionContentFindFirstOrThrowArgs>(args?: SelectSubset<T, SubsectionContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubsectionContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubsectionContents
     * const subsectionContents = await prisma.subsectionContent.findMany()
     * 
     * // Get first 10 SubsectionContents
     * const subsectionContents = await prisma.subsectionContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subsectionContentWithIdOnly = await prisma.subsectionContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubsectionContentFindManyArgs>(args?: SelectSubset<T, SubsectionContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubsectionContent.
     * @param {SubsectionContentCreateArgs} args - Arguments to create a SubsectionContent.
     * @example
     * // Create one SubsectionContent
     * const SubsectionContent = await prisma.subsectionContent.create({
     *   data: {
     *     // ... data to create a SubsectionContent
     *   }
     * })
     * 
     */
    create<T extends SubsectionContentCreateArgs>(args: SelectSubset<T, SubsectionContentCreateArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubsectionContents.
     * @param {SubsectionContentCreateManyArgs} args - Arguments to create many SubsectionContents.
     * @example
     * // Create many SubsectionContents
     * const subsectionContent = await prisma.subsectionContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubsectionContentCreateManyArgs>(args?: SelectSubset<T, SubsectionContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubsectionContent.
     * @param {SubsectionContentDeleteArgs} args - Arguments to delete one SubsectionContent.
     * @example
     * // Delete one SubsectionContent
     * const SubsectionContent = await prisma.subsectionContent.delete({
     *   where: {
     *     // ... filter to delete one SubsectionContent
     *   }
     * })
     * 
     */
    delete<T extends SubsectionContentDeleteArgs>(args: SelectSubset<T, SubsectionContentDeleteArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubsectionContent.
     * @param {SubsectionContentUpdateArgs} args - Arguments to update one SubsectionContent.
     * @example
     * // Update one SubsectionContent
     * const subsectionContent = await prisma.subsectionContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubsectionContentUpdateArgs>(args: SelectSubset<T, SubsectionContentUpdateArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubsectionContents.
     * @param {SubsectionContentDeleteManyArgs} args - Arguments to filter SubsectionContents to delete.
     * @example
     * // Delete a few SubsectionContents
     * const { count } = await prisma.subsectionContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubsectionContentDeleteManyArgs>(args?: SelectSubset<T, SubsectionContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubsectionContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubsectionContents
     * const subsectionContent = await prisma.subsectionContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubsectionContentUpdateManyArgs>(args: SelectSubset<T, SubsectionContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubsectionContent.
     * @param {SubsectionContentUpsertArgs} args - Arguments to update or create a SubsectionContent.
     * @example
     * // Update or create a SubsectionContent
     * const subsectionContent = await prisma.subsectionContent.upsert({
     *   create: {
     *     // ... data to create a SubsectionContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubsectionContent we want to update
     *   }
     * })
     */
    upsert<T extends SubsectionContentUpsertArgs>(args: SelectSubset<T, SubsectionContentUpsertArgs<ExtArgs>>): Prisma__SubsectionContentClient<$Result.GetResult<Prisma.$SubsectionContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubsectionContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentCountArgs} args - Arguments to filter SubsectionContents to count.
     * @example
     * // Count the number of SubsectionContents
     * const count = await prisma.subsectionContent.count({
     *   where: {
     *     // ... the filter for the SubsectionContents we want to count
     *   }
     * })
    **/
    count<T extends SubsectionContentCountArgs>(
      args?: Subset<T, SubsectionContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubsectionContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubsectionContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubsectionContentAggregateArgs>(args: Subset<T, SubsectionContentAggregateArgs>): Prisma.PrismaPromise<GetSubsectionContentAggregateType<T>>

    /**
     * Group by SubsectionContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsectionContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubsectionContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubsectionContentGroupByArgs['orderBy'] }
        : { orderBy?: SubsectionContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubsectionContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubsectionContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubsectionContent model
   */
  readonly fields: SubsectionContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubsectionContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubsectionContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subsection<T extends SubsectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubsectionDefaultArgs<ExtArgs>>): Prisma__SubsectionClient<$Result.GetResult<Prisma.$SubsectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubsectionContent model
   */
  interface SubsectionContentFieldRefs {
    readonly id: FieldRef<"SubsectionContent", 'String'>
    readonly contenu: FieldRef<"SubsectionContent", 'String'>
    readonly ordre: FieldRef<"SubsectionContent", 'Int'>
    readonly subsectionId: FieldRef<"SubsectionContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubsectionContent findUnique
   */
  export type SubsectionContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * Filter, which SubsectionContent to fetch.
     */
    where: SubsectionContentWhereUniqueInput
  }

  /**
   * SubsectionContent findUniqueOrThrow
   */
  export type SubsectionContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * Filter, which SubsectionContent to fetch.
     */
    where: SubsectionContentWhereUniqueInput
  }

  /**
   * SubsectionContent findFirst
   */
  export type SubsectionContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * Filter, which SubsectionContent to fetch.
     */
    where?: SubsectionContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsectionContents to fetch.
     */
    orderBy?: SubsectionContentOrderByWithRelationInput | SubsectionContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubsectionContents.
     */
    cursor?: SubsectionContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsectionContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsectionContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubsectionContents.
     */
    distinct?: SubsectionContentScalarFieldEnum | SubsectionContentScalarFieldEnum[]
  }

  /**
   * SubsectionContent findFirstOrThrow
   */
  export type SubsectionContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * Filter, which SubsectionContent to fetch.
     */
    where?: SubsectionContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsectionContents to fetch.
     */
    orderBy?: SubsectionContentOrderByWithRelationInput | SubsectionContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubsectionContents.
     */
    cursor?: SubsectionContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsectionContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsectionContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubsectionContents.
     */
    distinct?: SubsectionContentScalarFieldEnum | SubsectionContentScalarFieldEnum[]
  }

  /**
   * SubsectionContent findMany
   */
  export type SubsectionContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * Filter, which SubsectionContents to fetch.
     */
    where?: SubsectionContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsectionContents to fetch.
     */
    orderBy?: SubsectionContentOrderByWithRelationInput | SubsectionContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubsectionContents.
     */
    cursor?: SubsectionContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsectionContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsectionContents.
     */
    skip?: number
    distinct?: SubsectionContentScalarFieldEnum | SubsectionContentScalarFieldEnum[]
  }

  /**
   * SubsectionContent create
   */
  export type SubsectionContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * The data needed to create a SubsectionContent.
     */
    data: XOR<SubsectionContentCreateInput, SubsectionContentUncheckedCreateInput>
  }

  /**
   * SubsectionContent createMany
   */
  export type SubsectionContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubsectionContents.
     */
    data: SubsectionContentCreateManyInput | SubsectionContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubsectionContent update
   */
  export type SubsectionContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * The data needed to update a SubsectionContent.
     */
    data: XOR<SubsectionContentUpdateInput, SubsectionContentUncheckedUpdateInput>
    /**
     * Choose, which SubsectionContent to update.
     */
    where: SubsectionContentWhereUniqueInput
  }

  /**
   * SubsectionContent updateMany
   */
  export type SubsectionContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubsectionContents.
     */
    data: XOR<SubsectionContentUpdateManyMutationInput, SubsectionContentUncheckedUpdateManyInput>
    /**
     * Filter which SubsectionContents to update
     */
    where?: SubsectionContentWhereInput
    /**
     * Limit how many SubsectionContents to update.
     */
    limit?: number
  }

  /**
   * SubsectionContent upsert
   */
  export type SubsectionContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * The filter to search for the SubsectionContent to update in case it exists.
     */
    where: SubsectionContentWhereUniqueInput
    /**
     * In case the SubsectionContent found by the `where` argument doesn't exist, create a new SubsectionContent with this data.
     */
    create: XOR<SubsectionContentCreateInput, SubsectionContentUncheckedCreateInput>
    /**
     * In case the SubsectionContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubsectionContentUpdateInput, SubsectionContentUncheckedUpdateInput>
  }

  /**
   * SubsectionContent delete
   */
  export type SubsectionContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
    /**
     * Filter which SubsectionContent to delete.
     */
    where: SubsectionContentWhereUniqueInput
  }

  /**
   * SubsectionContent deleteMany
   */
  export type SubsectionContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubsectionContents to delete
     */
    where?: SubsectionContentWhereInput
    /**
     * Limit how many SubsectionContents to delete.
     */
    limit?: number
  }

  /**
   * SubsectionContent without action
   */
  export type SubsectionContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsectionContent
     */
    select?: SubsectionContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubsectionContent
     */
    omit?: SubsectionContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsectionContentInclude<ExtArgs> | null
  }


  /**
   * Model BulletPoint
   */

  export type AggregateBulletPoint = {
    _count: BulletPointCountAggregateOutputType | null
    _avg: BulletPointAvgAggregateOutputType | null
    _sum: BulletPointSumAggregateOutputType | null
    _min: BulletPointMinAggregateOutputType | null
    _max: BulletPointMaxAggregateOutputType | null
  }

  export type BulletPointAvgAggregateOutputType = {
    ordre: number | null
  }

  export type BulletPointSumAggregateOutputType = {
    ordre: number | null
  }

  export type BulletPointMinAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type BulletPointMaxAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type BulletPointCountAggregateOutputType = {
    id: number
    contenu: number
    ordre: number
    sectionId: number
    _all: number
  }


  export type BulletPointAvgAggregateInputType = {
    ordre?: true
  }

  export type BulletPointSumAggregateInputType = {
    ordre?: true
  }

  export type BulletPointMinAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    sectionId?: true
  }

  export type BulletPointMaxAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    sectionId?: true
  }

  export type BulletPointCountAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    sectionId?: true
    _all?: true
  }

  export type BulletPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletPoint to aggregate.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulletPoints
    **/
    _count?: true | BulletPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletPointMaxAggregateInputType
  }

  export type GetBulletPointAggregateType<T extends BulletPointAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletPoint[P]>
      : GetScalarType<T[P], AggregateBulletPoint[P]>
  }




  export type BulletPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletPointWhereInput
    orderBy?: BulletPointOrderByWithAggregationInput | BulletPointOrderByWithAggregationInput[]
    by: BulletPointScalarFieldEnum[] | BulletPointScalarFieldEnum
    having?: BulletPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletPointCountAggregateInputType | true
    _avg?: BulletPointAvgAggregateInputType
    _sum?: BulletPointSumAggregateInputType
    _min?: BulletPointMinAggregateInputType
    _max?: BulletPointMaxAggregateInputType
  }

  export type BulletPointGroupByOutputType = {
    id: string
    contenu: string
    ordre: number
    sectionId: string
    _count: BulletPointCountAggregateOutputType | null
    _avg: BulletPointAvgAggregateOutputType | null
    _sum: BulletPointSumAggregateOutputType | null
    _min: BulletPointMinAggregateOutputType | null
    _max: BulletPointMaxAggregateOutputType | null
  }

  type GetBulletPointGroupByPayload<T extends BulletPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletPointGroupByOutputType[P]>
            : GetScalarType<T[P], BulletPointGroupByOutputType[P]>
        }
      >
    >


  export type BulletPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletPoint"]>



  export type BulletPointSelectScalar = {
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    sectionId?: boolean
  }

  export type BulletPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "ordre" | "sectionId", ExtArgs["result"]["bulletPoint"]>
  export type BulletPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $BulletPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulletPoint"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenu: string
      ordre: number
      sectionId: string
    }, ExtArgs["result"]["bulletPoint"]>
    composites: {}
  }

  type BulletPointGetPayload<S extends boolean | null | undefined | BulletPointDefaultArgs> = $Result.GetResult<Prisma.$BulletPointPayload, S>

  type BulletPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletPointCountAggregateInputType | true
    }

  export interface BulletPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulletPoint'], meta: { name: 'BulletPoint' } }
    /**
     * Find zero or one BulletPoint that matches the filter.
     * @param {BulletPointFindUniqueArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletPointFindUniqueArgs>(args: SelectSubset<T, BulletPointFindUniqueArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulletPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletPointFindUniqueOrThrowArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletPointFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointFindFirstArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletPointFindFirstArgs>(args?: SelectSubset<T, BulletPointFindFirstArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointFindFirstOrThrowArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletPointFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulletPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulletPoints
     * const bulletPoints = await prisma.bulletPoint.findMany()
     * 
     * // Get first 10 BulletPoints
     * const bulletPoints = await prisma.bulletPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletPointWithIdOnly = await prisma.bulletPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletPointFindManyArgs>(args?: SelectSubset<T, BulletPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulletPoint.
     * @param {BulletPointCreateArgs} args - Arguments to create a BulletPoint.
     * @example
     * // Create one BulletPoint
     * const BulletPoint = await prisma.bulletPoint.create({
     *   data: {
     *     // ... data to create a BulletPoint
     *   }
     * })
     * 
     */
    create<T extends BulletPointCreateArgs>(args: SelectSubset<T, BulletPointCreateArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulletPoints.
     * @param {BulletPointCreateManyArgs} args - Arguments to create many BulletPoints.
     * @example
     * // Create many BulletPoints
     * const bulletPoint = await prisma.bulletPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletPointCreateManyArgs>(args?: SelectSubset<T, BulletPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BulletPoint.
     * @param {BulletPointDeleteArgs} args - Arguments to delete one BulletPoint.
     * @example
     * // Delete one BulletPoint
     * const BulletPoint = await prisma.bulletPoint.delete({
     *   where: {
     *     // ... filter to delete one BulletPoint
     *   }
     * })
     * 
     */
    delete<T extends BulletPointDeleteArgs>(args: SelectSubset<T, BulletPointDeleteArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulletPoint.
     * @param {BulletPointUpdateArgs} args - Arguments to update one BulletPoint.
     * @example
     * // Update one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletPointUpdateArgs>(args: SelectSubset<T, BulletPointUpdateArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulletPoints.
     * @param {BulletPointDeleteManyArgs} args - Arguments to filter BulletPoints to delete.
     * @example
     * // Delete a few BulletPoints
     * const { count } = await prisma.bulletPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletPointDeleteManyArgs>(args?: SelectSubset<T, BulletPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulletPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulletPoints
     * const bulletPoint = await prisma.bulletPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletPointUpdateManyArgs>(args: SelectSubset<T, BulletPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BulletPoint.
     * @param {BulletPointUpsertArgs} args - Arguments to update or create a BulletPoint.
     * @example
     * // Update or create a BulletPoint
     * const bulletPoint = await prisma.bulletPoint.upsert({
     *   create: {
     *     // ... data to create a BulletPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulletPoint we want to update
     *   }
     * })
     */
    upsert<T extends BulletPointUpsertArgs>(args: SelectSubset<T, BulletPointUpsertArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulletPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointCountArgs} args - Arguments to filter BulletPoints to count.
     * @example
     * // Count the number of BulletPoints
     * const count = await prisma.bulletPoint.count({
     *   where: {
     *     // ... the filter for the BulletPoints we want to count
     *   }
     * })
    **/
    count<T extends BulletPointCountArgs>(
      args?: Subset<T, BulletPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulletPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulletPointAggregateArgs>(args: Subset<T, BulletPointAggregateArgs>): Prisma.PrismaPromise<GetBulletPointAggregateType<T>>

    /**
     * Group by BulletPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulletPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletPointGroupByArgs['orderBy'] }
        : { orderBy?: BulletPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulletPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulletPoint model
   */
  readonly fields: BulletPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulletPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulletPoint model
   */
  interface BulletPointFieldRefs {
    readonly id: FieldRef<"BulletPoint", 'String'>
    readonly contenu: FieldRef<"BulletPoint", 'String'>
    readonly ordre: FieldRef<"BulletPoint", 'Int'>
    readonly sectionId: FieldRef<"BulletPoint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BulletPoint findUnique
   */
  export type BulletPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint findUniqueOrThrow
   */
  export type BulletPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint findFirst
   */
  export type BulletPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletPoints.
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletPoints.
     */
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * BulletPoint findFirstOrThrow
   */
  export type BulletPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletPoints.
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletPoints.
     */
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * BulletPoint findMany
   */
  export type BulletPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoints to fetch.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulletPoints.
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * BulletPoint create
   */
  export type BulletPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * The data needed to create a BulletPoint.
     */
    data: XOR<BulletPointCreateInput, BulletPointUncheckedCreateInput>
  }

  /**
   * BulletPoint createMany
   */
  export type BulletPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulletPoints.
     */
    data: BulletPointCreateManyInput | BulletPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulletPoint update
   */
  export type BulletPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * The data needed to update a BulletPoint.
     */
    data: XOR<BulletPointUpdateInput, BulletPointUncheckedUpdateInput>
    /**
     * Choose, which BulletPoint to update.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint updateMany
   */
  export type BulletPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulletPoints.
     */
    data: XOR<BulletPointUpdateManyMutationInput, BulletPointUncheckedUpdateManyInput>
    /**
     * Filter which BulletPoints to update
     */
    where?: BulletPointWhereInput
    /**
     * Limit how many BulletPoints to update.
     */
    limit?: number
  }

  /**
   * BulletPoint upsert
   */
  export type BulletPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * The filter to search for the BulletPoint to update in case it exists.
     */
    where: BulletPointWhereUniqueInput
    /**
     * In case the BulletPoint found by the `where` argument doesn't exist, create a new BulletPoint with this data.
     */
    create: XOR<BulletPointCreateInput, BulletPointUncheckedCreateInput>
    /**
     * In case the BulletPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletPointUpdateInput, BulletPointUncheckedUpdateInput>
  }

  /**
   * BulletPoint delete
   */
  export type BulletPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter which BulletPoint to delete.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint deleteMany
   */
  export type BulletPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletPoints to delete
     */
    where?: BulletPointWhereInput
    /**
     * Limit how many BulletPoints to delete.
     */
    limit?: number
  }

  /**
   * BulletPoint without action
   */
  export type BulletPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    pays: 'pays',
    continent: 'continent',
    description: 'description',
    imagePrincipale: 'imagePrincipale',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    ordre: 'ordre',
    type: 'type',
    destinationId: 'destinationId',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    sectionId: 'sectionId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SubsectionScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    ordre: 'ordre',
    sectionId: 'sectionId'
  };

  export type SubsectionScalarFieldEnum = (typeof SubsectionScalarFieldEnum)[keyof typeof SubsectionScalarFieldEnum]


  export const SubsectionContentScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    ordre: 'ordre',
    subsectionId: 'subsectionId'
  };

  export type SubsectionContentScalarFieldEnum = (typeof SubsectionContentScalarFieldEnum)[keyof typeof SubsectionContentScalarFieldEnum]


  export const BulletPointScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    ordre: 'ordre',
    sectionId: 'sectionId'
  };

  export type BulletPointScalarFieldEnum = (typeof BulletPointScalarFieldEnum)[keyof typeof BulletPointScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DestinationOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    pays: 'pays',
    continent: 'continent',
    description: 'description',
    imagePrincipale: 'imagePrincipale'
  };

  export type DestinationOrderByRelevanceFieldEnum = (typeof DestinationOrderByRelevanceFieldEnum)[keyof typeof DestinationOrderByRelevanceFieldEnum]


  export const SectionOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    destinationId: 'destinationId'
  };

  export type SectionOrderByRelevanceFieldEnum = (typeof SectionOrderByRelevanceFieldEnum)[keyof typeof SectionOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    sectionId: 'sectionId'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const SubsectionOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    sectionId: 'sectionId'
  };

  export type SubsectionOrderByRelevanceFieldEnum = (typeof SubsectionOrderByRelevanceFieldEnum)[keyof typeof SubsectionOrderByRelevanceFieldEnum]


  export const SubsectionContentOrderByRelevanceFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    subsectionId: 'subsectionId'
  };

  export type SubsectionContentOrderByRelevanceFieldEnum = (typeof SubsectionContentOrderByRelevanceFieldEnum)[keyof typeof SubsectionContentOrderByRelevanceFieldEnum]


  export const BulletPointOrderByRelevanceFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    sectionId: 'sectionId'
  };

  export type BulletPointOrderByRelevanceFieldEnum = (typeof BulletPointOrderByRelevanceFieldEnum)[keyof typeof BulletPointOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SectionType'
   */
  export type EnumSectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    titre?: StringFilter<"Destination"> | string
    pays?: StringFilter<"Destination"> | string
    continent?: StringNullableFilter<"Destination"> | string | null
    description?: StringNullableFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    sections?: SectionListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imagePrincipale?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sections?: SectionOrderByRelationAggregateInput
    _relevance?: DestinationOrderByRelevanceInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    titre?: StringFilter<"Destination"> | string
    pays?: StringFilter<"Destination"> | string
    continent?: StringNullableFilter<"Destination"> | string | null
    description?: StringNullableFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    sections?: SectionListRelationFilter
  }, "id">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imagePrincipale?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    titre?: StringWithAggregatesFilter<"Destination"> | string
    pays?: StringWithAggregatesFilter<"Destination"> | string
    continent?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    description?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    titre?: StringFilter<"Section"> | string
    contenu?: StringFilter<"Section"> | string
    ordre?: IntFilter<"Section"> | number
    type?: EnumSectionTypeFilter<"Section"> | $Enums.SectionType
    destinationId?: StringFilter<"Section"> | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    subsections?: SubsectionListRelationFilter
    bulletPoints?: BulletPointListRelationFilter
    images?: ImageListRelationFilter
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
    subsections?: SubsectionOrderByRelationAggregateInput
    bulletPoints?: BulletPointOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    destination?: DestinationOrderByWithRelationInput
    _relevance?: SectionOrderByRelevanceInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    titre?: StringFilter<"Section"> | string
    contenu?: StringFilter<"Section"> | string
    ordre?: IntFilter<"Section"> | number
    type?: EnumSectionTypeFilter<"Section"> | $Enums.SectionType
    destinationId?: StringFilter<"Section"> | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    subsections?: SubsectionListRelationFilter
    bulletPoints?: BulletPointListRelationFilter
    images?: ImageListRelationFilter
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    titre?: StringWithAggregatesFilter<"Section"> | string
    contenu?: StringWithAggregatesFilter<"Section"> | string
    ordre?: IntWithAggregatesFilter<"Section"> | number
    type?: EnumSectionTypeWithAggregatesFilter<"Section"> | $Enums.SectionType
    destinationId?: StringWithAggregatesFilter<"Section"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    sectionId?: StringFilter<"Image"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    sectionId?: StringFilter<"Image"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    sectionId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    sectionId?: StringWithAggregatesFilter<"Image"> | string
  }

  export type SubsectionWhereInput = {
    AND?: SubsectionWhereInput | SubsectionWhereInput[]
    OR?: SubsectionWhereInput[]
    NOT?: SubsectionWhereInput | SubsectionWhereInput[]
    id?: StringFilter<"Subsection"> | string
    titre?: StringFilter<"Subsection"> | string
    ordre?: IntFilter<"Subsection"> | number
    sectionId?: StringFilter<"Subsection"> | string
    contents?: SubsectionContentListRelationFilter
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type SubsectionOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    contents?: SubsectionContentOrderByRelationAggregateInput
    section?: SectionOrderByWithRelationInput
    _relevance?: SubsectionOrderByRelevanceInput
  }

  export type SubsectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubsectionWhereInput | SubsectionWhereInput[]
    OR?: SubsectionWhereInput[]
    NOT?: SubsectionWhereInput | SubsectionWhereInput[]
    titre?: StringFilter<"Subsection"> | string
    ordre?: IntFilter<"Subsection"> | number
    sectionId?: StringFilter<"Subsection"> | string
    contents?: SubsectionContentListRelationFilter
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type SubsectionOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    _count?: SubsectionCountOrderByAggregateInput
    _avg?: SubsectionAvgOrderByAggregateInput
    _max?: SubsectionMaxOrderByAggregateInput
    _min?: SubsectionMinOrderByAggregateInput
    _sum?: SubsectionSumOrderByAggregateInput
  }

  export type SubsectionScalarWhereWithAggregatesInput = {
    AND?: SubsectionScalarWhereWithAggregatesInput | SubsectionScalarWhereWithAggregatesInput[]
    OR?: SubsectionScalarWhereWithAggregatesInput[]
    NOT?: SubsectionScalarWhereWithAggregatesInput | SubsectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subsection"> | string
    titre?: StringWithAggregatesFilter<"Subsection"> | string
    ordre?: IntWithAggregatesFilter<"Subsection"> | number
    sectionId?: StringWithAggregatesFilter<"Subsection"> | string
  }

  export type SubsectionContentWhereInput = {
    AND?: SubsectionContentWhereInput | SubsectionContentWhereInput[]
    OR?: SubsectionContentWhereInput[]
    NOT?: SubsectionContentWhereInput | SubsectionContentWhereInput[]
    id?: StringFilter<"SubsectionContent"> | string
    contenu?: StringFilter<"SubsectionContent"> | string
    ordre?: IntFilter<"SubsectionContent"> | number
    subsectionId?: StringFilter<"SubsectionContent"> | string
    subsection?: XOR<SubsectionScalarRelationFilter, SubsectionWhereInput>
  }

  export type SubsectionContentOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    subsectionId?: SortOrder
    subsection?: SubsectionOrderByWithRelationInput
    _relevance?: SubsectionContentOrderByRelevanceInput
  }

  export type SubsectionContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubsectionContentWhereInput | SubsectionContentWhereInput[]
    OR?: SubsectionContentWhereInput[]
    NOT?: SubsectionContentWhereInput | SubsectionContentWhereInput[]
    contenu?: StringFilter<"SubsectionContent"> | string
    ordre?: IntFilter<"SubsectionContent"> | number
    subsectionId?: StringFilter<"SubsectionContent"> | string
    subsection?: XOR<SubsectionScalarRelationFilter, SubsectionWhereInput>
  }, "id">

  export type SubsectionContentOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    subsectionId?: SortOrder
    _count?: SubsectionContentCountOrderByAggregateInput
    _avg?: SubsectionContentAvgOrderByAggregateInput
    _max?: SubsectionContentMaxOrderByAggregateInput
    _min?: SubsectionContentMinOrderByAggregateInput
    _sum?: SubsectionContentSumOrderByAggregateInput
  }

  export type SubsectionContentScalarWhereWithAggregatesInput = {
    AND?: SubsectionContentScalarWhereWithAggregatesInput | SubsectionContentScalarWhereWithAggregatesInput[]
    OR?: SubsectionContentScalarWhereWithAggregatesInput[]
    NOT?: SubsectionContentScalarWhereWithAggregatesInput | SubsectionContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubsectionContent"> | string
    contenu?: StringWithAggregatesFilter<"SubsectionContent"> | string
    ordre?: IntWithAggregatesFilter<"SubsectionContent"> | number
    subsectionId?: StringWithAggregatesFilter<"SubsectionContent"> | string
  }

  export type BulletPointWhereInput = {
    AND?: BulletPointWhereInput | BulletPointWhereInput[]
    OR?: BulletPointWhereInput[]
    NOT?: BulletPointWhereInput | BulletPointWhereInput[]
    id?: StringFilter<"BulletPoint"> | string
    contenu?: StringFilter<"BulletPoint"> | string
    ordre?: IntFilter<"BulletPoint"> | number
    sectionId?: StringFilter<"BulletPoint"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type BulletPointOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
    _relevance?: BulletPointOrderByRelevanceInput
  }

  export type BulletPointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulletPointWhereInput | BulletPointWhereInput[]
    OR?: BulletPointWhereInput[]
    NOT?: BulletPointWhereInput | BulletPointWhereInput[]
    contenu?: StringFilter<"BulletPoint"> | string
    ordre?: IntFilter<"BulletPoint"> | number
    sectionId?: StringFilter<"BulletPoint"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type BulletPointOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    _count?: BulletPointCountOrderByAggregateInput
    _avg?: BulletPointAvgOrderByAggregateInput
    _max?: BulletPointMaxOrderByAggregateInput
    _min?: BulletPointMinOrderByAggregateInput
    _sum?: BulletPointSumOrderByAggregateInput
  }

  export type BulletPointScalarWhereWithAggregatesInput = {
    AND?: BulletPointScalarWhereWithAggregatesInput | BulletPointScalarWhereWithAggregatesInput[]
    OR?: BulletPointScalarWhereWithAggregatesInput[]
    NOT?: BulletPointScalarWhereWithAggregatesInput | BulletPointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulletPoint"> | string
    contenu?: StringWithAggregatesFilter<"BulletPoint"> | string
    ordre?: IntWithAggregatesFilter<"BulletPoint"> | number
    sectionId?: StringWithAggregatesFilter<"BulletPoint"> | string
  }

  export type UserCreateInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationCreateInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    subsections?: SubsectionCreateNestedManyWithoutSectionInput
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    subsections?: SubsectionUncheckedCreateNestedManyWithoutSectionInput
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUpdateManyWithoutSectionNestedInput
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUncheckedUpdateManyWithoutSectionNestedInput
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    alt?: string | null
    section: SectionCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    alt?: string | null
    sectionId: string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    section?: SectionUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    alt?: string | null
    sectionId: string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionCreateInput = {
    id?: string
    titre: string
    ordre: number
    contents?: SubsectionContentCreateNestedManyWithoutSubsectionInput
    section: SectionCreateNestedOneWithoutSubsectionsInput
  }

  export type SubsectionUncheckedCreateInput = {
    id?: string
    titre: string
    ordre: number
    sectionId: string
    contents?: SubsectionContentUncheckedCreateNestedManyWithoutSubsectionInput
  }

  export type SubsectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    contents?: SubsectionContentUpdateManyWithoutSubsectionNestedInput
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
  }

  export type SubsectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
    contents?: SubsectionContentUncheckedUpdateManyWithoutSubsectionNestedInput
  }

  export type SubsectionCreateManyInput = {
    id?: string
    titre: string
    ordre: number
    sectionId: string
  }

  export type SubsectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type SubsectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionContentCreateInput = {
    id?: string
    contenu: string
    ordre: number
    subsection: SubsectionCreateNestedOneWithoutContentsInput
  }

  export type SubsectionContentUncheckedCreateInput = {
    id?: string
    contenu: string
    ordre: number
    subsectionId: string
  }

  export type SubsectionContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    subsection?: SubsectionUpdateOneRequiredWithoutContentsNestedInput
  }

  export type SubsectionContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    subsectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SubsectionContentCreateManyInput = {
    id?: string
    contenu: string
    ordre: number
    subsectionId: string
  }

  export type SubsectionContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type SubsectionContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    subsectionId?: StringFieldUpdateOperationsInput | string
  }

  export type BulletPointCreateInput = {
    id?: string
    contenu: string
    ordre: number
    section: SectionCreateNestedOneWithoutBulletPointsInput
  }

  export type BulletPointUncheckedCreateInput = {
    id?: string
    contenu: string
    ordre: number
    sectionId: string
  }

  export type BulletPointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutBulletPointsNestedInput
  }

  export type BulletPointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type BulletPointCreateManyInput = {
    id?: string
    contenu: string
    ordre: number
    sectionId: string
  }

  export type BulletPointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationOrderByRelevanceInput = {
    fields: DestinationOrderByRelevanceFieldEnum | DestinationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrder
    description?: SortOrder
    imagePrincipale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrder
    description?: SortOrder
    imagePrincipale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrder
    description?: SortOrder
    imagePrincipale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeFilter<$PrismaModel> | $Enums.SectionType
  }

  export type SubsectionListRelationFilter = {
    every?: SubsectionWhereInput
    some?: SubsectionWhereInput
    none?: SubsectionWhereInput
  }

  export type BulletPointListRelationFilter = {
    every?: BulletPointWhereInput
    some?: BulletPointWhereInput
    none?: BulletPointWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type SubsectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BulletPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionOrderByRelevanceInput = {
    fields: SectionOrderByRelevanceFieldEnum | SectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type EnumSectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionTypeFilter<$PrismaModel>
    _max?: NestedEnumSectionTypeFilter<$PrismaModel>
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sectionId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sectionId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sectionId?: SortOrder
  }

  export type SubsectionContentListRelationFilter = {
    every?: SubsectionContentWhereInput
    some?: SubsectionContentWhereInput
    none?: SubsectionContentWhereInput
  }

  export type SubsectionContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubsectionOrderByRelevanceInput = {
    fields: SubsectionOrderByRelevanceFieldEnum | SubsectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubsectionCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type SubsectionAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type SubsectionMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type SubsectionMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type SubsectionSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type SubsectionScalarRelationFilter = {
    is?: SubsectionWhereInput
    isNot?: SubsectionWhereInput
  }

  export type SubsectionContentOrderByRelevanceInput = {
    fields: SubsectionContentOrderByRelevanceFieldEnum | SubsectionContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubsectionContentCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    subsectionId?: SortOrder
  }

  export type SubsectionContentAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type SubsectionContentMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    subsectionId?: SortOrder
  }

  export type SubsectionContentMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    subsectionId?: SortOrder
  }

  export type SubsectionContentSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type BulletPointOrderByRelevanceInput = {
    fields: BulletPointOrderByRelevanceFieldEnum | BulletPointOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BulletPointCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type BulletPointAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type BulletPointMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type BulletPointMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type BulletPointSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectionCreateNestedManyWithoutDestinationInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SectionUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutDestinationInput | SectionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutDestinationInput | SectionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutDestinationInput | SectionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutDestinationInput | SectionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutDestinationInput | SectionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutDestinationInput | SectionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SubsectionCreateNestedManyWithoutSectionInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
  }

  export type BulletPointCreateNestedManyWithoutSectionInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutSectionInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type DestinationCreateNestedOneWithoutSectionsInput = {
    create?: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutSectionsInput
    connect?: DestinationWhereUniqueInput
  }

  export type SubsectionUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
  }

  export type BulletPointUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type EnumSectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SectionType
  }

  export type SubsectionUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    upsert?: SubsectionUpsertWithWhereUniqueWithoutSectionInput | SubsectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    set?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    disconnect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    delete?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    update?: SubsectionUpdateWithWhereUniqueWithoutSectionInput | SubsectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SubsectionUpdateManyWithWhereWithoutSectionInput | SubsectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
  }

  export type BulletPointUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    upsert?: BulletPointUpsertWithWhereUniqueWithoutSectionInput | BulletPointUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    set?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    disconnect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    delete?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    update?: BulletPointUpdateWithWhereUniqueWithoutSectionInput | BulletPointUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BulletPointUpdateManyWithWhereWithoutSectionInput | BulletPointUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSectionInput | ImageUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSectionInput | ImageUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSectionInput | ImageUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type DestinationUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutSectionsInput
    upsert?: DestinationUpsertWithoutSectionsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutSectionsInput, DestinationUpdateWithoutSectionsInput>, DestinationUncheckedUpdateWithoutSectionsInput>
  }

  export type SubsectionUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput> | SubsectionCreateWithoutSectionInput[] | SubsectionUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: SubsectionCreateOrConnectWithoutSectionInput | SubsectionCreateOrConnectWithoutSectionInput[]
    upsert?: SubsectionUpsertWithWhereUniqueWithoutSectionInput | SubsectionUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: SubsectionCreateManySectionInputEnvelope
    set?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    disconnect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    delete?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    connect?: SubsectionWhereUniqueInput | SubsectionWhereUniqueInput[]
    update?: SubsectionUpdateWithWhereUniqueWithoutSectionInput | SubsectionUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: SubsectionUpdateManyWithWhereWithoutSectionInput | SubsectionUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
  }

  export type BulletPointUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    upsert?: BulletPointUpsertWithWhereUniqueWithoutSectionInput | BulletPointUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    set?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    disconnect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    delete?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    update?: BulletPointUpdateWithWhereUniqueWithoutSectionInput | BulletPointUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BulletPointUpdateManyWithWhereWithoutSectionInput | BulletPointUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSectionInput | ImageUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSectionInput | ImageUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSectionInput | ImageUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutImagesInput = {
    create?: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutImagesInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutImagesInput
    upsert?: SectionUpsertWithoutImagesInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutImagesInput, SectionUpdateWithoutImagesInput>, SectionUncheckedUpdateWithoutImagesInput>
  }

  export type SubsectionContentCreateNestedManyWithoutSubsectionInput = {
    create?: XOR<SubsectionContentCreateWithoutSubsectionInput, SubsectionContentUncheckedCreateWithoutSubsectionInput> | SubsectionContentCreateWithoutSubsectionInput[] | SubsectionContentUncheckedCreateWithoutSubsectionInput[]
    connectOrCreate?: SubsectionContentCreateOrConnectWithoutSubsectionInput | SubsectionContentCreateOrConnectWithoutSubsectionInput[]
    createMany?: SubsectionContentCreateManySubsectionInputEnvelope
    connect?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
  }

  export type SectionCreateNestedOneWithoutSubsectionsInput = {
    create?: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubsectionsInput
    connect?: SectionWhereUniqueInput
  }

  export type SubsectionContentUncheckedCreateNestedManyWithoutSubsectionInput = {
    create?: XOR<SubsectionContentCreateWithoutSubsectionInput, SubsectionContentUncheckedCreateWithoutSubsectionInput> | SubsectionContentCreateWithoutSubsectionInput[] | SubsectionContentUncheckedCreateWithoutSubsectionInput[]
    connectOrCreate?: SubsectionContentCreateOrConnectWithoutSubsectionInput | SubsectionContentCreateOrConnectWithoutSubsectionInput[]
    createMany?: SubsectionContentCreateManySubsectionInputEnvelope
    connect?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
  }

  export type SubsectionContentUpdateManyWithoutSubsectionNestedInput = {
    create?: XOR<SubsectionContentCreateWithoutSubsectionInput, SubsectionContentUncheckedCreateWithoutSubsectionInput> | SubsectionContentCreateWithoutSubsectionInput[] | SubsectionContentUncheckedCreateWithoutSubsectionInput[]
    connectOrCreate?: SubsectionContentCreateOrConnectWithoutSubsectionInput | SubsectionContentCreateOrConnectWithoutSubsectionInput[]
    upsert?: SubsectionContentUpsertWithWhereUniqueWithoutSubsectionInput | SubsectionContentUpsertWithWhereUniqueWithoutSubsectionInput[]
    createMany?: SubsectionContentCreateManySubsectionInputEnvelope
    set?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    disconnect?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    delete?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    connect?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    update?: SubsectionContentUpdateWithWhereUniqueWithoutSubsectionInput | SubsectionContentUpdateWithWhereUniqueWithoutSubsectionInput[]
    updateMany?: SubsectionContentUpdateManyWithWhereWithoutSubsectionInput | SubsectionContentUpdateManyWithWhereWithoutSubsectionInput[]
    deleteMany?: SubsectionContentScalarWhereInput | SubsectionContentScalarWhereInput[]
  }

  export type SectionUpdateOneRequiredWithoutSubsectionsNestedInput = {
    create?: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutSubsectionsInput
    upsert?: SectionUpsertWithoutSubsectionsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutSubsectionsInput, SectionUpdateWithoutSubsectionsInput>, SectionUncheckedUpdateWithoutSubsectionsInput>
  }

  export type SubsectionContentUncheckedUpdateManyWithoutSubsectionNestedInput = {
    create?: XOR<SubsectionContentCreateWithoutSubsectionInput, SubsectionContentUncheckedCreateWithoutSubsectionInput> | SubsectionContentCreateWithoutSubsectionInput[] | SubsectionContentUncheckedCreateWithoutSubsectionInput[]
    connectOrCreate?: SubsectionContentCreateOrConnectWithoutSubsectionInput | SubsectionContentCreateOrConnectWithoutSubsectionInput[]
    upsert?: SubsectionContentUpsertWithWhereUniqueWithoutSubsectionInput | SubsectionContentUpsertWithWhereUniqueWithoutSubsectionInput[]
    createMany?: SubsectionContentCreateManySubsectionInputEnvelope
    set?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    disconnect?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    delete?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    connect?: SubsectionContentWhereUniqueInput | SubsectionContentWhereUniqueInput[]
    update?: SubsectionContentUpdateWithWhereUniqueWithoutSubsectionInput | SubsectionContentUpdateWithWhereUniqueWithoutSubsectionInput[]
    updateMany?: SubsectionContentUpdateManyWithWhereWithoutSubsectionInput | SubsectionContentUpdateManyWithWhereWithoutSubsectionInput[]
    deleteMany?: SubsectionContentScalarWhereInput | SubsectionContentScalarWhereInput[]
  }

  export type SubsectionCreateNestedOneWithoutContentsInput = {
    create?: XOR<SubsectionCreateWithoutContentsInput, SubsectionUncheckedCreateWithoutContentsInput>
    connectOrCreate?: SubsectionCreateOrConnectWithoutContentsInput
    connect?: SubsectionWhereUniqueInput
  }

  export type SubsectionUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<SubsectionCreateWithoutContentsInput, SubsectionUncheckedCreateWithoutContentsInput>
    connectOrCreate?: SubsectionCreateOrConnectWithoutContentsInput
    upsert?: SubsectionUpsertWithoutContentsInput
    connect?: SubsectionWhereUniqueInput
    update?: XOR<XOR<SubsectionUpdateToOneWithWhereWithoutContentsInput, SubsectionUpdateWithoutContentsInput>, SubsectionUncheckedUpdateWithoutContentsInput>
  }

  export type SectionCreateNestedOneWithoutBulletPointsInput = {
    create?: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutBulletPointsInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutBulletPointsNestedInput = {
    create?: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutBulletPointsInput
    upsert?: SectionUpsertWithoutBulletPointsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutBulletPointsInput, SectionUpdateWithoutBulletPointsInput>, SectionUncheckedUpdateWithoutBulletPointsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeFilter<$PrismaModel> | $Enums.SectionType
  }

  export type NestedEnumSectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionTypeFilter<$PrismaModel>
    _max?: NestedEnumSectionTypeFilter<$PrismaModel>
  }

  export type SectionCreateWithoutDestinationInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    subsections?: SubsectionCreateNestedManyWithoutSectionInput
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutDestinationInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    subsections?: SubsectionUncheckedCreateNestedManyWithoutSectionInput
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutDestinationInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput>
  }

  export type SectionCreateManyDestinationInputEnvelope = {
    data: SectionCreateManyDestinationInput | SectionCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithWhereUniqueWithoutDestinationInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutDestinationInput, SectionUncheckedUpdateWithoutDestinationInput>
    create: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutDestinationInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutDestinationInput, SectionUncheckedUpdateWithoutDestinationInput>
  }

  export type SectionUpdateManyWithWhereWithoutDestinationInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutDestinationInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    titre?: StringFilter<"Section"> | string
    contenu?: StringFilter<"Section"> | string
    ordre?: IntFilter<"Section"> | number
    type?: EnumSectionTypeFilter<"Section"> | $Enums.SectionType
    destinationId?: StringFilter<"Section"> | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
  }

  export type SubsectionCreateWithoutSectionInput = {
    id?: string
    titre: string
    ordre: number
    contents?: SubsectionContentCreateNestedManyWithoutSubsectionInput
  }

  export type SubsectionUncheckedCreateWithoutSectionInput = {
    id?: string
    titre: string
    ordre: number
    contents?: SubsectionContentUncheckedCreateNestedManyWithoutSubsectionInput
  }

  export type SubsectionCreateOrConnectWithoutSectionInput = {
    where: SubsectionWhereUniqueInput
    create: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput>
  }

  export type SubsectionCreateManySectionInputEnvelope = {
    data: SubsectionCreateManySectionInput | SubsectionCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type BulletPointCreateWithoutSectionInput = {
    id?: string
    contenu: string
    ordre: number
  }

  export type BulletPointUncheckedCreateWithoutSectionInput = {
    id?: string
    contenu: string
    ordre: number
  }

  export type BulletPointCreateOrConnectWithoutSectionInput = {
    where: BulletPointWhereUniqueInput
    create: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput>
  }

  export type BulletPointCreateManySectionInputEnvelope = {
    data: BulletPointCreateManySectionInput | BulletPointCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutSectionInput = {
    id?: string
    url: string
    alt?: string | null
  }

  export type ImageUncheckedCreateWithoutSectionInput = {
    id?: string
    url: string
    alt?: string | null
  }

  export type ImageCreateOrConnectWithoutSectionInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput>
  }

  export type ImageCreateManySectionInputEnvelope = {
    data: ImageCreateManySectionInput | ImageCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type DestinationCreateWithoutSectionsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationUncheckedCreateWithoutSectionsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DestinationCreateOrConnectWithoutSectionsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
  }

  export type SubsectionUpsertWithWhereUniqueWithoutSectionInput = {
    where: SubsectionWhereUniqueInput
    update: XOR<SubsectionUpdateWithoutSectionInput, SubsectionUncheckedUpdateWithoutSectionInput>
    create: XOR<SubsectionCreateWithoutSectionInput, SubsectionUncheckedCreateWithoutSectionInput>
  }

  export type SubsectionUpdateWithWhereUniqueWithoutSectionInput = {
    where: SubsectionWhereUniqueInput
    data: XOR<SubsectionUpdateWithoutSectionInput, SubsectionUncheckedUpdateWithoutSectionInput>
  }

  export type SubsectionUpdateManyWithWhereWithoutSectionInput = {
    where: SubsectionScalarWhereInput
    data: XOR<SubsectionUpdateManyMutationInput, SubsectionUncheckedUpdateManyWithoutSectionInput>
  }

  export type SubsectionScalarWhereInput = {
    AND?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
    OR?: SubsectionScalarWhereInput[]
    NOT?: SubsectionScalarWhereInput | SubsectionScalarWhereInput[]
    id?: StringFilter<"Subsection"> | string
    titre?: StringFilter<"Subsection"> | string
    ordre?: IntFilter<"Subsection"> | number
    sectionId?: StringFilter<"Subsection"> | string
  }

  export type BulletPointUpsertWithWhereUniqueWithoutSectionInput = {
    where: BulletPointWhereUniqueInput
    update: XOR<BulletPointUpdateWithoutSectionInput, BulletPointUncheckedUpdateWithoutSectionInput>
    create: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput>
  }

  export type BulletPointUpdateWithWhereUniqueWithoutSectionInput = {
    where: BulletPointWhereUniqueInput
    data: XOR<BulletPointUpdateWithoutSectionInput, BulletPointUncheckedUpdateWithoutSectionInput>
  }

  export type BulletPointUpdateManyWithWhereWithoutSectionInput = {
    where: BulletPointScalarWhereInput
    data: XOR<BulletPointUpdateManyMutationInput, BulletPointUncheckedUpdateManyWithoutSectionInput>
  }

  export type BulletPointScalarWhereInput = {
    AND?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
    OR?: BulletPointScalarWhereInput[]
    NOT?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
    id?: StringFilter<"BulletPoint"> | string
    contenu?: StringFilter<"BulletPoint"> | string
    ordre?: IntFilter<"BulletPoint"> | number
    sectionId?: StringFilter<"BulletPoint"> | string
  }

  export type ImageUpsertWithWhereUniqueWithoutSectionInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutSectionInput, ImageUncheckedUpdateWithoutSectionInput>
    create: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutSectionInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutSectionInput, ImageUncheckedUpdateWithoutSectionInput>
  }

  export type ImageUpdateManyWithWhereWithoutSectionInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutSectionInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    sectionId?: StringFilter<"Image"> | string
  }

  export type DestinationUpsertWithoutSectionsInput = {
    update: XOR<DestinationUpdateWithoutSectionsInput, DestinationUncheckedUpdateWithoutSectionsInput>
    create: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutSectionsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutSectionsInput, DestinationUncheckedUpdateWithoutSectionsInput>
  }

  export type DestinationUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateWithoutImagesInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    subsections?: SubsectionCreateNestedManyWithoutSectionInput
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutImagesInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    subsections?: SubsectionUncheckedCreateNestedManyWithoutSectionInput
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutImagesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
  }

  export type SectionUpsertWithoutImagesInput = {
    update: XOR<SectionUpdateWithoutImagesInput, SectionUncheckedUpdateWithoutImagesInput>
    create: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutImagesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutImagesInput, SectionUncheckedUpdateWithoutImagesInput>
  }

  export type SectionUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUpdateManyWithoutSectionNestedInput
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUncheckedUpdateManyWithoutSectionNestedInput
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SubsectionContentCreateWithoutSubsectionInput = {
    id?: string
    contenu: string
    ordre: number
  }

  export type SubsectionContentUncheckedCreateWithoutSubsectionInput = {
    id?: string
    contenu: string
    ordre: number
  }

  export type SubsectionContentCreateOrConnectWithoutSubsectionInput = {
    where: SubsectionContentWhereUniqueInput
    create: XOR<SubsectionContentCreateWithoutSubsectionInput, SubsectionContentUncheckedCreateWithoutSubsectionInput>
  }

  export type SubsectionContentCreateManySubsectionInputEnvelope = {
    data: SubsectionContentCreateManySubsectionInput | SubsectionContentCreateManySubsectionInput[]
    skipDuplicates?: boolean
  }

  export type SectionCreateWithoutSubsectionsInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutSubsectionsInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutSubsectionsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
  }

  export type SubsectionContentUpsertWithWhereUniqueWithoutSubsectionInput = {
    where: SubsectionContentWhereUniqueInput
    update: XOR<SubsectionContentUpdateWithoutSubsectionInput, SubsectionContentUncheckedUpdateWithoutSubsectionInput>
    create: XOR<SubsectionContentCreateWithoutSubsectionInput, SubsectionContentUncheckedCreateWithoutSubsectionInput>
  }

  export type SubsectionContentUpdateWithWhereUniqueWithoutSubsectionInput = {
    where: SubsectionContentWhereUniqueInput
    data: XOR<SubsectionContentUpdateWithoutSubsectionInput, SubsectionContentUncheckedUpdateWithoutSubsectionInput>
  }

  export type SubsectionContentUpdateManyWithWhereWithoutSubsectionInput = {
    where: SubsectionContentScalarWhereInput
    data: XOR<SubsectionContentUpdateManyMutationInput, SubsectionContentUncheckedUpdateManyWithoutSubsectionInput>
  }

  export type SubsectionContentScalarWhereInput = {
    AND?: SubsectionContentScalarWhereInput | SubsectionContentScalarWhereInput[]
    OR?: SubsectionContentScalarWhereInput[]
    NOT?: SubsectionContentScalarWhereInput | SubsectionContentScalarWhereInput[]
    id?: StringFilter<"SubsectionContent"> | string
    contenu?: StringFilter<"SubsectionContent"> | string
    ordre?: IntFilter<"SubsectionContent"> | number
    subsectionId?: StringFilter<"SubsectionContent"> | string
  }

  export type SectionUpsertWithoutSubsectionsInput = {
    update: XOR<SectionUpdateWithoutSubsectionsInput, SectionUncheckedUpdateWithoutSubsectionsInput>
    create: XOR<SectionCreateWithoutSubsectionsInput, SectionUncheckedCreateWithoutSubsectionsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutSubsectionsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutSubsectionsInput, SectionUncheckedUpdateWithoutSubsectionsInput>
  }

  export type SectionUpdateWithoutSubsectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutSubsectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SubsectionCreateWithoutContentsInput = {
    id?: string
    titre: string
    ordre: number
    section: SectionCreateNestedOneWithoutSubsectionsInput
  }

  export type SubsectionUncheckedCreateWithoutContentsInput = {
    id?: string
    titre: string
    ordre: number
    sectionId: string
  }

  export type SubsectionCreateOrConnectWithoutContentsInput = {
    where: SubsectionWhereUniqueInput
    create: XOR<SubsectionCreateWithoutContentsInput, SubsectionUncheckedCreateWithoutContentsInput>
  }

  export type SubsectionUpsertWithoutContentsInput = {
    update: XOR<SubsectionUpdateWithoutContentsInput, SubsectionUncheckedUpdateWithoutContentsInput>
    create: XOR<SubsectionCreateWithoutContentsInput, SubsectionUncheckedCreateWithoutContentsInput>
    where?: SubsectionWhereInput
  }

  export type SubsectionUpdateToOneWithWhereWithoutContentsInput = {
    where?: SubsectionWhereInput
    data: XOR<SubsectionUpdateWithoutContentsInput, SubsectionUncheckedUpdateWithoutContentsInput>
  }

  export type SubsectionUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutSubsectionsNestedInput
  }

  export type SubsectionUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateWithoutBulletPointsInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    subsections?: SubsectionCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutBulletPointsInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    subsections?: SubsectionUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutBulletPointsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
  }

  export type SectionUpsertWithoutBulletPointsInput = {
    update: XOR<SectionUpdateWithoutBulletPointsInput, SectionUncheckedUpdateWithoutBulletPointsInput>
    create: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutBulletPointsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutBulletPointsInput, SectionUncheckedUpdateWithoutBulletPointsInput>
  }

  export type SectionUpdateWithoutBulletPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutBulletPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyDestinationInput = {
    id?: string
    titre: string
    contenu: string
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
  }

  export type SectionUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUpdateManyWithoutSectionNestedInput
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subsections?: SubsectionUncheckedUpdateManyWithoutSectionNestedInput
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubsectionCreateManySectionInput = {
    id?: string
    titre: string
    ordre: number
  }

  export type BulletPointCreateManySectionInput = {
    id?: string
    contenu: string
    ordre: number
  }

  export type ImageCreateManySectionInput = {
    id?: string
    url: string
    alt?: string | null
  }

  export type SubsectionUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    contents?: SubsectionContentUpdateManyWithoutSubsectionNestedInput
  }

  export type SubsectionUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    contents?: SubsectionContentUncheckedUpdateManyWithoutSubsectionNestedInput
  }

  export type SubsectionUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubsectionContentCreateManySubsectionInput = {
    id?: string
    contenu: string
    ordre: number
  }

  export type SubsectionContentUpdateWithoutSubsectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type SubsectionContentUncheckedUpdateWithoutSubsectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type SubsectionContentUncheckedUpdateManyWithoutSubsectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}