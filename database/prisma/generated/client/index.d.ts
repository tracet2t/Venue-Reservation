
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
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model VenueAvailability
 * 
 */
export type VenueAvailability = $Result.DefaultSelection<Prisma.$VenueAvailabilityPayload>
/**
 * Model TimeSlot
 * 
 */
export type TimeSlot = $Result.DefaultSelection<Prisma.$TimeSlotPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ReservationState
 * 
 */
export type ReservationState = $Result.DefaultSelection<Prisma.$ReservationStatePayload>
/**
 * Model VenueDailyReservationCount
 * 
 */
export type VenueDailyReservationCount = $Result.DefaultSelection<Prisma.$VenueDailyReservationCountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  Admin: 'Admin',
  Regular: 'Regular',
  Guest: 'Guest'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const Schedule: {
  EntireDay: 'EntireDay',
  SessionTime: 'SessionTime',
  HourlyTime: 'HourlyTime'
};

export type Schedule = (typeof Schedule)[keyof typeof Schedule]


export const AvailabilityStatus: {
  FULLY_BOOKED: 'FULLY_BOOKED',
  PARTIALLY_BOOKED: 'PARTIALLY_BOOKED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  AVAILABLE: 'AVAILABLE'
};

export type AvailabilityStatus = (typeof AvailabilityStatus)[keyof typeof AvailabilityStatus]


export const ExtraService: {
  food: 'food',
  sound_system: 'sound_system',
  private_parking: 'private_parking',
  projectors: 'projectors',
  extend_hours: 'extend_hours'
};

export type ExtraService = (typeof ExtraService)[keyof typeof ExtraService]


export const Status: {
  Pending: 'Pending',
  Rejected: 'Rejected',
  Accepted: 'Accepted'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type Schedule = $Enums.Schedule

export const Schedule: typeof $Enums.Schedule

export type AvailabilityStatus = $Enums.AvailabilityStatus

export const AvailabilityStatus: typeof $Enums.AvailabilityStatus

export type ExtraService = $Enums.ExtraService

export const ExtraService: typeof $Enums.ExtraService

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs>;

  /**
   * `prisma.venueAvailability`: Exposes CRUD operations for the **VenueAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueAvailabilities
    * const venueAvailabilities = await prisma.venueAvailability.findMany()
    * ```
    */
  get venueAvailability(): Prisma.VenueAvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.timeSlot`: Exposes CRUD operations for the **TimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeSlots
    * const timeSlots = await prisma.timeSlot.findMany()
    * ```
    */
  get timeSlot(): Prisma.TimeSlotDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.reservationState`: Exposes CRUD operations for the **ReservationState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationStates
    * const reservationStates = await prisma.reservationState.findMany()
    * ```
    */
  get reservationState(): Prisma.ReservationStateDelegate<ExtArgs>;

  /**
   * `prisma.venueDailyReservationCount`: Exposes CRUD operations for the **VenueDailyReservationCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueDailyReservationCounts
    * const venueDailyReservationCounts = await prisma.venueDailyReservationCount.findMany()
    * ```
    */
  get venueDailyReservationCount(): Prisma.VenueDailyReservationCountDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    VerificationToken: 'VerificationToken',
    Venue: 'Venue',
    VenueAvailability: 'VenueAvailability',
    TimeSlot: 'TimeSlot',
    Reservation: 'Reservation',
    ReservationState: 'ReservationState',
    VenueDailyReservationCount: 'VenueDailyReservationCount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "verificationToken" | "venue" | "venueAvailability" | "timeSlot" | "reservation" | "reservationState" | "venueDailyReservationCount"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      VenueAvailability: {
        payload: Prisma.$VenueAvailabilityPayload<ExtArgs>
        fields: Prisma.VenueAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.VenueAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>
          }
          findMany: {
            args: Prisma.VenueAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>[]
          }
          create: {
            args: Prisma.VenueAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>
          }
          createMany: {
            args: Prisma.VenueAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.VenueAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>
          }
          update: {
            args: Prisma.VenueAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.VenueAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VenueAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.VenueAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueAvailability>
          }
          groupBy: {
            args: Prisma.VenueAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<VenueAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      TimeSlot: {
        payload: Prisma.$TimeSlotPayload<ExtArgs>
        fields: Prisma.TimeSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findFirst: {
            args: Prisma.TimeSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          findMany: {
            args: Prisma.TimeSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          create: {
            args: Prisma.TimeSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          createMany: {
            args: Prisma.TimeSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>[]
          }
          delete: {
            args: Prisma.TimeSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          update: {
            args: Prisma.TimeSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          deleteMany: {
            args: Prisma.TimeSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimeSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeSlotPayload>
          }
          aggregate: {
            args: Prisma.TimeSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeSlot>
          }
          groupBy: {
            args: Prisma.TimeSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeSlotCountArgs<ExtArgs>
            result: $Utils.Optional<TimeSlotCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ReservationState: {
        payload: Prisma.$ReservationStatePayload<ExtArgs>
        fields: Prisma.ReservationStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>
          }
          findFirst: {
            args: Prisma.ReservationStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>
          }
          findMany: {
            args: Prisma.ReservationStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>[]
          }
          create: {
            args: Prisma.ReservationStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>
          }
          createMany: {
            args: Prisma.ReservationStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>[]
          }
          delete: {
            args: Prisma.ReservationStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>
          }
          update: {
            args: Prisma.ReservationStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>
          }
          deleteMany: {
            args: Prisma.ReservationStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationStatePayload>
          }
          aggregate: {
            args: Prisma.ReservationStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationState>
          }
          groupBy: {
            args: Prisma.ReservationStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationStateCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationStateCountAggregateOutputType> | number
          }
        }
      }
      VenueDailyReservationCount: {
        payload: Prisma.$VenueDailyReservationCountPayload<ExtArgs>
        fields: Prisma.VenueDailyReservationCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueDailyReservationCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueDailyReservationCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>
          }
          findFirst: {
            args: Prisma.VenueDailyReservationCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueDailyReservationCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>
          }
          findMany: {
            args: Prisma.VenueDailyReservationCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>[]
          }
          create: {
            args: Prisma.VenueDailyReservationCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>
          }
          createMany: {
            args: Prisma.VenueDailyReservationCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueDailyReservationCountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>[]
          }
          delete: {
            args: Prisma.VenueDailyReservationCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>
          }
          update: {
            args: Prisma.VenueDailyReservationCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>
          }
          deleteMany: {
            args: Prisma.VenueDailyReservationCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueDailyReservationCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VenueDailyReservationCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueDailyReservationCountPayload>
          }
          aggregate: {
            args: Prisma.VenueDailyReservationCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueDailyReservationCount>
          }
          groupBy: {
            args: Prisma.VenueDailyReservationCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueDailyReservationCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueDailyReservationCountCountArgs<ExtArgs>
            result: $Utils.Optional<VenueDailyReservationCountCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reservations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    availability: number
    reservations: number
    dailyReservationCounts: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | VenueCountOutputTypeCountAvailabilityArgs
    reservations?: boolean | VenueCountOutputTypeCountReservationsArgs
    dailyReservationCounts?: boolean | VenueCountOutputTypeCountDailyReservationCountsArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueAvailabilityWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountDailyReservationCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueDailyReservationCountWhereInput
  }


  /**
   * Count Type VenueAvailabilityCountOutputType
   */

  export type VenueAvailabilityCountOutputType = {
    timeSlots: number
  }

  export type VenueAvailabilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeSlots?: boolean | VenueAvailabilityCountOutputTypeCountTimeSlotsArgs
  }

  // Custom InputTypes
  /**
   * VenueAvailabilityCountOutputType without action
   */
  export type VenueAvailabilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailabilityCountOutputType
     */
    select?: VenueAvailabilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueAvailabilityCountOutputType without action
   */
  export type VenueAvailabilityCountOutputTypeCountTimeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotWhereInput
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
    contactNumber: number | null
  }

  export type UserSumAggregateOutputType = {
    contactNumber: bigint | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    contactNumber: bigint | null
    address: string | null
    email: string | null
    emailVerified: boolean | null
    password: string | null
    userType: $Enums.UserType | null
    provider: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    contactNumber: bigint | null
    address: string | null
    email: string | null
    emailVerified: boolean | null
    password: string | null
    userType: $Enums.UserType | null
    provider: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    firstName: number
    lastName: number
    contactNumber: number
    address: number
    email: number
    emailVerified: number
    password: number
    userType: number
    provider: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    contactNumber?: true
  }

  export type UserSumAggregateInputType = {
    contactNumber?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    contactNumber?: true
    address?: true
    email?: true
    emailVerified?: true
    password?: true
    userType?: true
    provider?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    contactNumber?: true
    address?: true
    email?: true
    emailVerified?: true
    password?: true
    userType?: true
    provider?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    firstName?: true
    lastName?: true
    contactNumber?: true
    address?: true
    email?: true
    emailVerified?: true
    password?: true
    userType?: true
    provider?: true
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
    userId: string
    firstName: string
    lastName: string | null
    contactNumber: bigint | null
    address: string | null
    email: string
    emailVerified: boolean
    password: string | null
    userType: $Enums.UserType
    provider: string | null
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
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    contactNumber?: boolean
    address?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    userType?: boolean
    provider?: boolean
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    contactNumber?: boolean
    address?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    userType?: boolean
    provider?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    contactNumber?: boolean
    address?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    userType?: boolean
    provider?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string
      lastName: string | null
      contactNumber: bigint | null
      address: string | null
      email: string
      emailVerified: boolean
      password: string | null
      userType: $Enums.UserType
      provider: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly contactNumber: FieldRef<"User", 'BigInt'>
    readonly address: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly provider: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    email?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    email?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    email: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly email: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    size: number | null
  }

  export type VenueSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    size: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: number | null
    name: string | null
    district: string | null
    province: string | null
    type: string | null
    capacity: number | null
    size: number | null
    schedule: $Enums.Schedule | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenueMaxAggregateOutputType = {
    id: number | null
    name: string | null
    district: string | null
    province: string | null
    type: string | null
    capacity: number | null
    size: number | null
    schedule: $Enums.Schedule | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    name: number
    street_name: number
    district: number
    province: number
    type: number
    capacity: number
    size: number
    schedule: number
    features: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    id?: true
    capacity?: true
    size?: true
  }

  export type VenueSumAggregateInputType = {
    id?: true
    capacity?: true
    size?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    name?: true
    district?: true
    province?: true
    type?: true
    capacity?: true
    size?: true
    schedule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    name?: true
    district?: true
    province?: true
    type?: true
    capacity?: true
    size?: true
    schedule?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    name?: true
    street_name?: true
    district?: true
    province?: true
    type?: true
    capacity?: true
    size?: true
    schedule?: true
    features?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: number
    name: string
    street_name: string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features: string[]
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street_name?: boolean
    district?: boolean
    province?: boolean
    type?: boolean
    capacity?: boolean
    size?: boolean
    schedule?: boolean
    features?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availability?: boolean | Venue$availabilityArgs<ExtArgs>
    reservations?: boolean | Venue$reservationsArgs<ExtArgs>
    dailyReservationCounts?: boolean | Venue$dailyReservationCountsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    street_name?: boolean
    district?: boolean
    province?: boolean
    type?: boolean
    capacity?: boolean
    size?: boolean
    schedule?: boolean
    features?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    name?: boolean
    street_name?: boolean
    district?: boolean
    province?: boolean
    type?: boolean
    capacity?: boolean
    size?: boolean
    schedule?: boolean
    features?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | Venue$availabilityArgs<ExtArgs>
    reservations?: boolean | Venue$reservationsArgs<ExtArgs>
    dailyReservationCounts?: boolean | Venue$dailyReservationCountsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      availability: Prisma.$VenueAvailabilityPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      dailyReservationCounts: Prisma.$VenueDailyReservationCountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      street_name: string[]
      district: string
      province: string
      type: string
      capacity: number
      size: number
      schedule: $Enums.Schedule
      features: string[]
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availability<T extends Venue$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Venue$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    reservations<T extends Venue$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
    dailyReservationCounts<T extends Venue$dailyReservationCountsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$dailyReservationCountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Venue model
   */ 
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'Int'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly street_name: FieldRef<"Venue", 'String[]'>
    readonly district: FieldRef<"Venue", 'String'>
    readonly province: FieldRef<"Venue", 'String'>
    readonly type: FieldRef<"Venue", 'String'>
    readonly capacity: FieldRef<"Venue", 'Int'>
    readonly size: FieldRef<"Venue", 'Int'>
    readonly schedule: FieldRef<"Venue", 'Schedule'>
    readonly features: FieldRef<"Venue", 'String[]'>
    readonly images: FieldRef<"Venue", 'String[]'>
    readonly createdAt: FieldRef<"Venue", 'DateTime'>
    readonly updatedAt: FieldRef<"Venue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
  }

  /**
   * Venue.availability
   */
  export type Venue$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    where?: VenueAvailabilityWhereInput
    orderBy?: VenueAvailabilityOrderByWithRelationInput | VenueAvailabilityOrderByWithRelationInput[]
    cursor?: VenueAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueAvailabilityScalarFieldEnum | VenueAvailabilityScalarFieldEnum[]
  }

  /**
   * Venue.reservations
   */
  export type Venue$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Venue.dailyReservationCounts
   */
  export type Venue$dailyReservationCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    where?: VenueDailyReservationCountWhereInput
    orderBy?: VenueDailyReservationCountOrderByWithRelationInput | VenueDailyReservationCountOrderByWithRelationInput[]
    cursor?: VenueDailyReservationCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueDailyReservationCountScalarFieldEnum | VenueDailyReservationCountScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model VenueAvailability
   */

  export type AggregateVenueAvailability = {
    _count: VenueAvailabilityCountAggregateOutputType | null
    _avg: VenueAvailabilityAvgAggregateOutputType | null
    _sum: VenueAvailabilitySumAggregateOutputType | null
    _min: VenueAvailabilityMinAggregateOutputType | null
    _max: VenueAvailabilityMaxAggregateOutputType | null
  }

  export type VenueAvailabilityAvgAggregateOutputType = {
    id: number | null
    venueId: number | null
  }

  export type VenueAvailabilitySumAggregateOutputType = {
    id: number | null
    venueId: number | null
  }

  export type VenueAvailabilityMinAggregateOutputType = {
    id: number | null
    venueId: number | null
    date: Date | null
    status: $Enums.AvailabilityStatus | null
  }

  export type VenueAvailabilityMaxAggregateOutputType = {
    id: number | null
    venueId: number | null
    date: Date | null
    status: $Enums.AvailabilityStatus | null
  }

  export type VenueAvailabilityCountAggregateOutputType = {
    id: number
    venueId: number
    date: number
    status: number
    _all: number
  }


  export type VenueAvailabilityAvgAggregateInputType = {
    id?: true
    venueId?: true
  }

  export type VenueAvailabilitySumAggregateInputType = {
    id?: true
    venueId?: true
  }

  export type VenueAvailabilityMinAggregateInputType = {
    id?: true
    venueId?: true
    date?: true
    status?: true
  }

  export type VenueAvailabilityMaxAggregateInputType = {
    id?: true
    venueId?: true
    date?: true
    status?: true
  }

  export type VenueAvailabilityCountAggregateInputType = {
    id?: true
    venueId?: true
    date?: true
    status?: true
    _all?: true
  }

  export type VenueAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueAvailability to aggregate.
     */
    where?: VenueAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueAvailabilities to fetch.
     */
    orderBy?: VenueAvailabilityOrderByWithRelationInput | VenueAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueAvailabilities
    **/
    _count?: true | VenueAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueAvailabilityMaxAggregateInputType
  }

  export type GetVenueAvailabilityAggregateType<T extends VenueAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueAvailability[P]>
      : GetScalarType<T[P], AggregateVenueAvailability[P]>
  }




  export type VenueAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueAvailabilityWhereInput
    orderBy?: VenueAvailabilityOrderByWithAggregationInput | VenueAvailabilityOrderByWithAggregationInput[]
    by: VenueAvailabilityScalarFieldEnum[] | VenueAvailabilityScalarFieldEnum
    having?: VenueAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueAvailabilityCountAggregateInputType | true
    _avg?: VenueAvailabilityAvgAggregateInputType
    _sum?: VenueAvailabilitySumAggregateInputType
    _min?: VenueAvailabilityMinAggregateInputType
    _max?: VenueAvailabilityMaxAggregateInputType
  }

  export type VenueAvailabilityGroupByOutputType = {
    id: number
    venueId: number
    date: Date
    status: $Enums.AvailabilityStatus
    _count: VenueAvailabilityCountAggregateOutputType | null
    _avg: VenueAvailabilityAvgAggregateOutputType | null
    _sum: VenueAvailabilitySumAggregateOutputType | null
    _min: VenueAvailabilityMinAggregateOutputType | null
    _max: VenueAvailabilityMaxAggregateOutputType | null
  }

  type GetVenueAvailabilityGroupByPayload<T extends VenueAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], VenueAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type VenueAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    date?: boolean
    status?: boolean
    timeSlots?: boolean | VenueAvailability$timeSlotsArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    _count?: boolean | VenueAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueAvailability"]>

  export type VenueAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    date?: boolean
    status?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueAvailability"]>

  export type VenueAvailabilitySelectScalar = {
    id?: boolean
    venueId?: boolean
    date?: boolean
    status?: boolean
  }

  export type VenueAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeSlots?: boolean | VenueAvailability$timeSlotsArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    _count?: boolean | VenueAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $VenueAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueAvailability"
    objects: {
      timeSlots: Prisma.$TimeSlotPayload<ExtArgs>[]
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venueId: number
      date: Date
      status: $Enums.AvailabilityStatus
    }, ExtArgs["result"]["venueAvailability"]>
    composites: {}
  }

  type VenueAvailabilityGetPayload<S extends boolean | null | undefined | VenueAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$VenueAvailabilityPayload, S>

  type VenueAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VenueAvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VenueAvailabilityCountAggregateInputType | true
    }

  export interface VenueAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueAvailability'], meta: { name: 'VenueAvailability' } }
    /**
     * Find zero or one VenueAvailability that matches the filter.
     * @param {VenueAvailabilityFindUniqueArgs} args - Arguments to find a VenueAvailability
     * @example
     * // Get one VenueAvailability
     * const venueAvailability = await prisma.venueAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueAvailabilityFindUniqueArgs>(args: SelectSubset<T, VenueAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VenueAvailability that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VenueAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a VenueAvailability
     * @example
     * // Get one VenueAvailability
     * const venueAvailability = await prisma.venueAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VenueAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityFindFirstArgs} args - Arguments to find a VenueAvailability
     * @example
     * // Get one VenueAvailability
     * const venueAvailability = await prisma.venueAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueAvailabilityFindFirstArgs>(args?: SelectSubset<T, VenueAvailabilityFindFirstArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VenueAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityFindFirstOrThrowArgs} args - Arguments to find a VenueAvailability
     * @example
     * // Get one VenueAvailability
     * const venueAvailability = await prisma.venueAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VenueAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueAvailabilities
     * const venueAvailabilities = await prisma.venueAvailability.findMany()
     * 
     * // Get first 10 VenueAvailabilities
     * const venueAvailabilities = await prisma.venueAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueAvailabilityWithIdOnly = await prisma.venueAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueAvailabilityFindManyArgs>(args?: SelectSubset<T, VenueAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VenueAvailability.
     * @param {VenueAvailabilityCreateArgs} args - Arguments to create a VenueAvailability.
     * @example
     * // Create one VenueAvailability
     * const VenueAvailability = await prisma.venueAvailability.create({
     *   data: {
     *     // ... data to create a VenueAvailability
     *   }
     * })
     * 
     */
    create<T extends VenueAvailabilityCreateArgs>(args: SelectSubset<T, VenueAvailabilityCreateArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VenueAvailabilities.
     * @param {VenueAvailabilityCreateManyArgs} args - Arguments to create many VenueAvailabilities.
     * @example
     * // Create many VenueAvailabilities
     * const venueAvailability = await prisma.venueAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueAvailabilityCreateManyArgs>(args?: SelectSubset<T, VenueAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueAvailabilities and returns the data saved in the database.
     * @param {VenueAvailabilityCreateManyAndReturnArgs} args - Arguments to create many VenueAvailabilities.
     * @example
     * // Create many VenueAvailabilities
     * const venueAvailability = await prisma.venueAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueAvailabilities and only return the `id`
     * const venueAvailabilityWithIdOnly = await prisma.venueAvailability.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VenueAvailability.
     * @param {VenueAvailabilityDeleteArgs} args - Arguments to delete one VenueAvailability.
     * @example
     * // Delete one VenueAvailability
     * const VenueAvailability = await prisma.venueAvailability.delete({
     *   where: {
     *     // ... filter to delete one VenueAvailability
     *   }
     * })
     * 
     */
    delete<T extends VenueAvailabilityDeleteArgs>(args: SelectSubset<T, VenueAvailabilityDeleteArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VenueAvailability.
     * @param {VenueAvailabilityUpdateArgs} args - Arguments to update one VenueAvailability.
     * @example
     * // Update one VenueAvailability
     * const venueAvailability = await prisma.venueAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueAvailabilityUpdateArgs>(args: SelectSubset<T, VenueAvailabilityUpdateArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VenueAvailabilities.
     * @param {VenueAvailabilityDeleteManyArgs} args - Arguments to filter VenueAvailabilities to delete.
     * @example
     * // Delete a few VenueAvailabilities
     * const { count } = await prisma.venueAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueAvailabilityDeleteManyArgs>(args?: SelectSubset<T, VenueAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueAvailabilities
     * const venueAvailability = await prisma.venueAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueAvailabilityUpdateManyArgs>(args: SelectSubset<T, VenueAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VenueAvailability.
     * @param {VenueAvailabilityUpsertArgs} args - Arguments to update or create a VenueAvailability.
     * @example
     * // Update or create a VenueAvailability
     * const venueAvailability = await prisma.venueAvailability.upsert({
     *   create: {
     *     // ... data to create a VenueAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueAvailability we want to update
     *   }
     * })
     */
    upsert<T extends VenueAvailabilityUpsertArgs>(args: SelectSubset<T, VenueAvailabilityUpsertArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VenueAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityCountArgs} args - Arguments to filter VenueAvailabilities to count.
     * @example
     * // Count the number of VenueAvailabilities
     * const count = await prisma.venueAvailability.count({
     *   where: {
     *     // ... the filter for the VenueAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends VenueAvailabilityCountArgs>(
      args?: Subset<T, VenueAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAvailabilityAggregateArgs>(args: Subset<T, VenueAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetVenueAvailabilityAggregateType<T>>

    /**
     * Group by VenueAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends VenueAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: VenueAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueAvailability model
   */
  readonly fields: VenueAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    timeSlots<T extends VenueAvailability$timeSlotsArgs<ExtArgs> = {}>(args?: Subset<T, VenueAvailability$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany"> | Null>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the VenueAvailability model
   */ 
  interface VenueAvailabilityFieldRefs {
    readonly id: FieldRef<"VenueAvailability", 'Int'>
    readonly venueId: FieldRef<"VenueAvailability", 'Int'>
    readonly date: FieldRef<"VenueAvailability", 'DateTime'>
    readonly status: FieldRef<"VenueAvailability", 'AvailabilityStatus'>
  }
    

  // Custom InputTypes
  /**
   * VenueAvailability findUnique
   */
  export type VenueAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VenueAvailability to fetch.
     */
    where: VenueAvailabilityWhereUniqueInput
  }

  /**
   * VenueAvailability findUniqueOrThrow
   */
  export type VenueAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VenueAvailability to fetch.
     */
    where: VenueAvailabilityWhereUniqueInput
  }

  /**
   * VenueAvailability findFirst
   */
  export type VenueAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VenueAvailability to fetch.
     */
    where?: VenueAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueAvailabilities to fetch.
     */
    orderBy?: VenueAvailabilityOrderByWithRelationInput | VenueAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueAvailabilities.
     */
    cursor?: VenueAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueAvailabilities.
     */
    distinct?: VenueAvailabilityScalarFieldEnum | VenueAvailabilityScalarFieldEnum[]
  }

  /**
   * VenueAvailability findFirstOrThrow
   */
  export type VenueAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VenueAvailability to fetch.
     */
    where?: VenueAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueAvailabilities to fetch.
     */
    orderBy?: VenueAvailabilityOrderByWithRelationInput | VenueAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueAvailabilities.
     */
    cursor?: VenueAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueAvailabilities.
     */
    distinct?: VenueAvailabilityScalarFieldEnum | VenueAvailabilityScalarFieldEnum[]
  }

  /**
   * VenueAvailability findMany
   */
  export type VenueAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VenueAvailabilities to fetch.
     */
    where?: VenueAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueAvailabilities to fetch.
     */
    orderBy?: VenueAvailabilityOrderByWithRelationInput | VenueAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueAvailabilities.
     */
    cursor?: VenueAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueAvailabilities.
     */
    skip?: number
    distinct?: VenueAvailabilityScalarFieldEnum | VenueAvailabilityScalarFieldEnum[]
  }

  /**
   * VenueAvailability create
   */
  export type VenueAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueAvailability.
     */
    data: XOR<VenueAvailabilityCreateInput, VenueAvailabilityUncheckedCreateInput>
  }

  /**
   * VenueAvailability createMany
   */
  export type VenueAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueAvailabilities.
     */
    data: VenueAvailabilityCreateManyInput | VenueAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueAvailability createManyAndReturn
   */
  export type VenueAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VenueAvailabilities.
     */
    data: VenueAvailabilityCreateManyInput | VenueAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueAvailability update
   */
  export type VenueAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueAvailability.
     */
    data: XOR<VenueAvailabilityUpdateInput, VenueAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which VenueAvailability to update.
     */
    where: VenueAvailabilityWhereUniqueInput
  }

  /**
   * VenueAvailability updateMany
   */
  export type VenueAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueAvailabilities.
     */
    data: XOR<VenueAvailabilityUpdateManyMutationInput, VenueAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which VenueAvailabilities to update
     */
    where?: VenueAvailabilityWhereInput
  }

  /**
   * VenueAvailability upsert
   */
  export type VenueAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueAvailability to update in case it exists.
     */
    where: VenueAvailabilityWhereUniqueInput
    /**
     * In case the VenueAvailability found by the `where` argument doesn't exist, create a new VenueAvailability with this data.
     */
    create: XOR<VenueAvailabilityCreateInput, VenueAvailabilityUncheckedCreateInput>
    /**
     * In case the VenueAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueAvailabilityUpdateInput, VenueAvailabilityUncheckedUpdateInput>
  }

  /**
   * VenueAvailability delete
   */
  export type VenueAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which VenueAvailability to delete.
     */
    where: VenueAvailabilityWhereUniqueInput
  }

  /**
   * VenueAvailability deleteMany
   */
  export type VenueAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueAvailabilities to delete
     */
    where?: VenueAvailabilityWhereInput
  }

  /**
   * VenueAvailability.timeSlots
   */
  export type VenueAvailability$timeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    where?: TimeSlotWhereInput
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    cursor?: TimeSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * VenueAvailability without action
   */
  export type VenueAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueAvailability
     */
    select?: VenueAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model TimeSlot
   */

  export type AggregateTimeSlot = {
    _count: TimeSlotCountAggregateOutputType | null
    _avg: TimeSlotAvgAggregateOutputType | null
    _sum: TimeSlotSumAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  export type TimeSlotAvgAggregateOutputType = {
    id: number | null
    availabilityId: number | null
  }

  export type TimeSlotSumAggregateOutputType = {
    id: number | null
    availabilityId: number | null
  }

  export type TimeSlotMinAggregateOutputType = {
    id: number | null
    availabilityId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AvailabilityStatus | null
  }

  export type TimeSlotMaxAggregateOutputType = {
    id: number | null
    availabilityId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AvailabilityStatus | null
  }

  export type TimeSlotCountAggregateOutputType = {
    id: number
    availabilityId: number
    startTime: number
    endTime: number
    status: number
    _all: number
  }


  export type TimeSlotAvgAggregateInputType = {
    id?: true
    availabilityId?: true
  }

  export type TimeSlotSumAggregateInputType = {
    id?: true
    availabilityId?: true
  }

  export type TimeSlotMinAggregateInputType = {
    id?: true
    availabilityId?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type TimeSlotMaxAggregateInputType = {
    id?: true
    availabilityId?: true
    startTime?: true
    endTime?: true
    status?: true
  }

  export type TimeSlotCountAggregateInputType = {
    id?: true
    availabilityId?: true
    startTime?: true
    endTime?: true
    status?: true
    _all?: true
  }

  export type TimeSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlot to aggregate.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeSlots
    **/
    _count?: true | TimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeSlotMaxAggregateInputType
  }

  export type GetTimeSlotAggregateType<T extends TimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeSlot[P]>
      : GetScalarType<T[P], AggregateTimeSlot[P]>
  }




  export type TimeSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeSlotWhereInput
    orderBy?: TimeSlotOrderByWithAggregationInput | TimeSlotOrderByWithAggregationInput[]
    by: TimeSlotScalarFieldEnum[] | TimeSlotScalarFieldEnum
    having?: TimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeSlotCountAggregateInputType | true
    _avg?: TimeSlotAvgAggregateInputType
    _sum?: TimeSlotSumAggregateInputType
    _min?: TimeSlotMinAggregateInputType
    _max?: TimeSlotMaxAggregateInputType
  }

  export type TimeSlotGroupByOutputType = {
    id: number
    availabilityId: number
    startTime: Date
    endTime: Date
    status: $Enums.AvailabilityStatus
    _count: TimeSlotCountAggregateOutputType | null
    _avg: TimeSlotAvgAggregateOutputType | null
    _sum: TimeSlotSumAggregateOutputType | null
    _min: TimeSlotMinAggregateOutputType | null
    _max: TimeSlotMaxAggregateOutputType | null
  }

  type GetTimeSlotGroupByPayload<T extends TimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], TimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type TimeSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    availabilityId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    venueAvailability?: boolean | VenueAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    availabilityId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    venueAvailability?: boolean | VenueAvailabilityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeSlot"]>

  export type TimeSlotSelectScalar = {
    id?: boolean
    availabilityId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
  }

  export type TimeSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venueAvailability?: boolean | VenueAvailabilityDefaultArgs<ExtArgs>
  }
  export type TimeSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venueAvailability?: boolean | VenueAvailabilityDefaultArgs<ExtArgs>
  }

  export type $TimeSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeSlot"
    objects: {
      venueAvailability: Prisma.$VenueAvailabilityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      availabilityId: number
      startTime: Date
      endTime: Date
      status: $Enums.AvailabilityStatus
    }, ExtArgs["result"]["timeSlot"]>
    composites: {}
  }

  type TimeSlotGetPayload<S extends boolean | null | undefined | TimeSlotDefaultArgs> = $Result.GetResult<Prisma.$TimeSlotPayload, S>

  type TimeSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeSlotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeSlotCountAggregateInputType | true
    }

  export interface TimeSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeSlot'], meta: { name: 'TimeSlot' } }
    /**
     * Find zero or one TimeSlot that matches the filter.
     * @param {TimeSlotFindUniqueArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeSlotFindUniqueArgs>(args: SelectSubset<T, TimeSlotFindUniqueArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimeSlot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimeSlotFindUniqueOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeSlotFindFirstArgs>(args?: SelectSubset<T, TimeSlotFindFirstArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindFirstOrThrowArgs} args - Arguments to find a TimeSlot
     * @example
     * // Get one TimeSlot
     * const timeSlot = await prisma.timeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany()
     * 
     * // Get first 10 TimeSlots
     * const timeSlots = await prisma.timeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeSlotFindManyArgs>(args?: SelectSubset<T, TimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimeSlot.
     * @param {TimeSlotCreateArgs} args - Arguments to create a TimeSlot.
     * @example
     * // Create one TimeSlot
     * const TimeSlot = await prisma.timeSlot.create({
     *   data: {
     *     // ... data to create a TimeSlot
     *   }
     * })
     * 
     */
    create<T extends TimeSlotCreateArgs>(args: SelectSubset<T, TimeSlotCreateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimeSlots.
     * @param {TimeSlotCreateManyArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeSlotCreateManyArgs>(args?: SelectSubset<T, TimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeSlots and returns the data saved in the database.
     * @param {TimeSlotCreateManyAndReturnArgs} args - Arguments to create many TimeSlots.
     * @example
     * // Create many TimeSlots
     * const timeSlot = await prisma.timeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeSlots and only return the `id`
     * const timeSlotWithIdOnly = await prisma.timeSlot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimeSlot.
     * @param {TimeSlotDeleteArgs} args - Arguments to delete one TimeSlot.
     * @example
     * // Delete one TimeSlot
     * const TimeSlot = await prisma.timeSlot.delete({
     *   where: {
     *     // ... filter to delete one TimeSlot
     *   }
     * })
     * 
     */
    delete<T extends TimeSlotDeleteArgs>(args: SelectSubset<T, TimeSlotDeleteArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimeSlot.
     * @param {TimeSlotUpdateArgs} args - Arguments to update one TimeSlot.
     * @example
     * // Update one TimeSlot
     * const timeSlot = await prisma.timeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeSlotUpdateArgs>(args: SelectSubset<T, TimeSlotUpdateArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimeSlots.
     * @param {TimeSlotDeleteManyArgs} args - Arguments to filter TimeSlots to delete.
     * @example
     * // Delete a few TimeSlots
     * const { count } = await prisma.timeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeSlotDeleteManyArgs>(args?: SelectSubset<T, TimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeSlots
     * const timeSlot = await prisma.timeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeSlotUpdateManyArgs>(args: SelectSubset<T, TimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeSlot.
     * @param {TimeSlotUpsertArgs} args - Arguments to update or create a TimeSlot.
     * @example
     * // Update or create a TimeSlot
     * const timeSlot = await prisma.timeSlot.upsert({
     *   create: {
     *     // ... data to create a TimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends TimeSlotUpsertArgs>(args: SelectSubset<T, TimeSlotUpsertArgs<ExtArgs>>): Prisma__TimeSlotClient<$Result.GetResult<Prisma.$TimeSlotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotCountArgs} args - Arguments to filter TimeSlots to count.
     * @example
     * // Count the number of TimeSlots
     * const count = await prisma.timeSlot.count({
     *   where: {
     *     // ... the filter for the TimeSlots we want to count
     *   }
     * })
    **/
    count<T extends TimeSlotCountArgs>(
      args?: Subset<T, TimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeSlotAggregateArgs>(args: Subset<T, TimeSlotAggregateArgs>): Prisma.PrismaPromise<GetTimeSlotAggregateType<T>>

    /**
     * Group by TimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeSlotGroupByArgs} args - Group by arguments.
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
      T extends TimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: TimeSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeSlot model
   */
  readonly fields: TimeSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venueAvailability<T extends VenueAvailabilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueAvailabilityDefaultArgs<ExtArgs>>): Prisma__VenueAvailabilityClient<$Result.GetResult<Prisma.$VenueAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TimeSlot model
   */ 
  interface TimeSlotFieldRefs {
    readonly id: FieldRef<"TimeSlot", 'Int'>
    readonly availabilityId: FieldRef<"TimeSlot", 'Int'>
    readonly startTime: FieldRef<"TimeSlot", 'DateTime'>
    readonly endTime: FieldRef<"TimeSlot", 'DateTime'>
    readonly status: FieldRef<"TimeSlot", 'AvailabilityStatus'>
  }
    

  // Custom InputTypes
  /**
   * TimeSlot findUnique
   */
  export type TimeSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findUniqueOrThrow
   */
  export type TimeSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot findFirst
   */
  export type TimeSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findFirstOrThrow
   */
  export type TimeSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlot to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeSlots.
     */
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot findMany
   */
  export type TimeSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which TimeSlots to fetch.
     */
    where?: TimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeSlots to fetch.
     */
    orderBy?: TimeSlotOrderByWithRelationInput | TimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeSlots.
     */
    cursor?: TimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeSlots.
     */
    skip?: number
    distinct?: TimeSlotScalarFieldEnum | TimeSlotScalarFieldEnum[]
  }

  /**
   * TimeSlot create
   */
  export type TimeSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeSlot.
     */
    data: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
  }

  /**
   * TimeSlot createMany
   */
  export type TimeSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TimeSlot createManyAndReturn
   */
  export type TimeSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimeSlots.
     */
    data: TimeSlotCreateManyInput | TimeSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeSlot update
   */
  export type TimeSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeSlot.
     */
    data: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
    /**
     * Choose, which TimeSlot to update.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot updateMany
   */
  export type TimeSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeSlots.
     */
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which TimeSlots to update
     */
    where?: TimeSlotWhereInput
  }

  /**
   * TimeSlot upsert
   */
  export type TimeSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeSlot to update in case it exists.
     */
    where: TimeSlotWhereUniqueInput
    /**
     * In case the TimeSlot found by the `where` argument doesn't exist, create a new TimeSlot with this data.
     */
    create: XOR<TimeSlotCreateInput, TimeSlotUncheckedCreateInput>
    /**
     * In case the TimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeSlotUpdateInput, TimeSlotUncheckedUpdateInput>
  }

  /**
   * TimeSlot delete
   */
  export type TimeSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
    /**
     * Filter which TimeSlot to delete.
     */
    where: TimeSlotWhereUniqueInput
  }

  /**
   * TimeSlot deleteMany
   */
  export type TimeSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeSlots to delete
     */
    where?: TimeSlotWhereInput
  }

  /**
   * TimeSlot without action
   */
  export type TimeSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeSlot
     */
    select?: TimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeSlotInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    venueId: number | null
    timeDuration: number | null
  }

  export type ReservationSumAggregateOutputType = {
    venueId: number | null
    timeDuration: number | null
  }

  export type ReservationMinAggregateOutputType = {
    reservationId: string | null
    userId: string | null
    venueId: number | null
    title: string | null
    purposeOfReservation: string | null
    timeDuration: number | null
    reservationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    reservationId: string | null
    userId: string | null
    venueId: number | null
    title: string | null
    purposeOfReservation: string | null
    timeDuration: number | null
    reservationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    reservationId: number
    userId: number
    venueId: number
    title: number
    purposeOfReservation: number
    timeDuration: number
    extraServices: number
    reservationDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    venueId?: true
    timeDuration?: true
  }

  export type ReservationSumAggregateInputType = {
    venueId?: true
    timeDuration?: true
  }

  export type ReservationMinAggregateInputType = {
    reservationId?: true
    userId?: true
    venueId?: true
    title?: true
    purposeOfReservation?: true
    timeDuration?: true
    reservationDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    reservationId?: true
    userId?: true
    venueId?: true
    title?: true
    purposeOfReservation?: true
    timeDuration?: true
    reservationDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    reservationId?: true
    userId?: true
    venueId?: true
    title?: true
    purposeOfReservation?: true
    timeDuration?: true
    extraServices?: true
    reservationDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    reservationId: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices: $Enums.ExtraService[]
    reservationDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    userId?: boolean
    venueId?: boolean
    title?: boolean
    purposeOfReservation?: boolean
    timeDuration?: boolean
    extraServices?: boolean
    reservationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    reservationState?: boolean | Reservation$reservationStateArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    userId?: boolean
    venueId?: boolean
    title?: boolean
    purposeOfReservation?: boolean
    timeDuration?: boolean
    extraServices?: boolean
    reservationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    reservationId?: boolean
    userId?: boolean
    venueId?: boolean
    title?: boolean
    purposeOfReservation?: boolean
    timeDuration?: boolean
    extraServices?: boolean
    reservationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    reservationState?: boolean | Reservation$reservationStateArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
      reservationState: Prisma.$ReservationStatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      reservationId: string
      userId: string
      venueId: number
      title: string
      purposeOfReservation: string
      timeDuration: number
      extraServices: $Enums.ExtraService[]
      reservationDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.findMany({ select: { reservationId: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `reservationId`
     * const reservationWithReservationIdOnly = await prisma.reservation.createManyAndReturn({ 
     *   select: { reservationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    reservationState<T extends Reservation$reservationStateArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$reservationStateArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly reservationId: FieldRef<"Reservation", 'String'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly venueId: FieldRef<"Reservation", 'Int'>
    readonly title: FieldRef<"Reservation", 'String'>
    readonly purposeOfReservation: FieldRef<"Reservation", 'String'>
    readonly timeDuration: FieldRef<"Reservation", 'Int'>
    readonly extraServices: FieldRef<"Reservation", 'ExtraService[]'>
    readonly reservationDate: FieldRef<"Reservation", 'DateTime'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation.reservationState
   */
  export type Reservation$reservationStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    where?: ReservationStateWhereInput
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model ReservationState
   */

  export type AggregateReservationState = {
    _count: ReservationStateCountAggregateOutputType | null
    _min: ReservationStateMinAggregateOutputType | null
    _max: ReservationStateMaxAggregateOutputType | null
  }

  export type ReservationStateMinAggregateOutputType = {
    reservationStateId: string | null
    reservationId: string | null
    status: $Enums.Status | null
    adminComments: string | null
  }

  export type ReservationStateMaxAggregateOutputType = {
    reservationStateId: string | null
    reservationId: string | null
    status: $Enums.Status | null
    adminComments: string | null
  }

  export type ReservationStateCountAggregateOutputType = {
    reservationStateId: number
    reservationId: number
    status: number
    adminComments: number
    _all: number
  }


  export type ReservationStateMinAggregateInputType = {
    reservationStateId?: true
    reservationId?: true
    status?: true
    adminComments?: true
  }

  export type ReservationStateMaxAggregateInputType = {
    reservationStateId?: true
    reservationId?: true
    status?: true
    adminComments?: true
  }

  export type ReservationStateCountAggregateInputType = {
    reservationStateId?: true
    reservationId?: true
    status?: true
    adminComments?: true
    _all?: true
  }

  export type ReservationStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationState to aggregate.
     */
    where?: ReservationStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationStates to fetch.
     */
    orderBy?: ReservationStateOrderByWithRelationInput | ReservationStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationStates
    **/
    _count?: true | ReservationStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationStateMaxAggregateInputType
  }

  export type GetReservationStateAggregateType<T extends ReservationStateAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationState[P]>
      : GetScalarType<T[P], AggregateReservationState[P]>
  }




  export type ReservationStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationStateWhereInput
    orderBy?: ReservationStateOrderByWithAggregationInput | ReservationStateOrderByWithAggregationInput[]
    by: ReservationStateScalarFieldEnum[] | ReservationStateScalarFieldEnum
    having?: ReservationStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationStateCountAggregateInputType | true
    _min?: ReservationStateMinAggregateInputType
    _max?: ReservationStateMaxAggregateInputType
  }

  export type ReservationStateGroupByOutputType = {
    reservationStateId: string
    reservationId: string
    status: $Enums.Status
    adminComments: string | null
    _count: ReservationStateCountAggregateOutputType | null
    _min: ReservationStateMinAggregateOutputType | null
    _max: ReservationStateMaxAggregateOutputType | null
  }

  type GetReservationStateGroupByPayload<T extends ReservationStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationStateGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationStateGroupByOutputType[P]>
        }
      >
    >


  export type ReservationStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationStateId?: boolean
    reservationId?: boolean
    status?: boolean
    adminComments?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationState"]>

  export type ReservationStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationStateId?: boolean
    reservationId?: boolean
    status?: boolean
    adminComments?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationState"]>

  export type ReservationStateSelectScalar = {
    reservationStateId?: boolean
    reservationId?: boolean
    status?: boolean
    adminComments?: boolean
  }

  export type ReservationStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type ReservationStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $ReservationStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationState"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reservationStateId: string
      reservationId: string
      status: $Enums.Status
      adminComments: string | null
    }, ExtArgs["result"]["reservationState"]>
    composites: {}
  }

  type ReservationStateGetPayload<S extends boolean | null | undefined | ReservationStateDefaultArgs> = $Result.GetResult<Prisma.$ReservationStatePayload, S>

  type ReservationStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationStateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationStateCountAggregateInputType | true
    }

  export interface ReservationStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationState'], meta: { name: 'ReservationState' } }
    /**
     * Find zero or one ReservationState that matches the filter.
     * @param {ReservationStateFindUniqueArgs} args - Arguments to find a ReservationState
     * @example
     * // Get one ReservationState
     * const reservationState = await prisma.reservationState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationStateFindUniqueArgs>(args: SelectSubset<T, ReservationStateFindUniqueArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReservationState that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationStateFindUniqueOrThrowArgs} args - Arguments to find a ReservationState
     * @example
     * // Get one ReservationState
     * const reservationState = await prisma.reservationState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationStateFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReservationState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateFindFirstArgs} args - Arguments to find a ReservationState
     * @example
     * // Get one ReservationState
     * const reservationState = await prisma.reservationState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationStateFindFirstArgs>(args?: SelectSubset<T, ReservationStateFindFirstArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReservationState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateFindFirstOrThrowArgs} args - Arguments to find a ReservationState
     * @example
     * // Get one ReservationState
     * const reservationState = await prisma.reservationState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationStateFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReservationStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationStates
     * const reservationStates = await prisma.reservationState.findMany()
     * 
     * // Get first 10 ReservationStates
     * const reservationStates = await prisma.reservationState.findMany({ take: 10 })
     * 
     * // Only select the `reservationStateId`
     * const reservationStateWithReservationStateIdOnly = await prisma.reservationState.findMany({ select: { reservationStateId: true } })
     * 
     */
    findMany<T extends ReservationStateFindManyArgs>(args?: SelectSubset<T, ReservationStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReservationState.
     * @param {ReservationStateCreateArgs} args - Arguments to create a ReservationState.
     * @example
     * // Create one ReservationState
     * const ReservationState = await prisma.reservationState.create({
     *   data: {
     *     // ... data to create a ReservationState
     *   }
     * })
     * 
     */
    create<T extends ReservationStateCreateArgs>(args: SelectSubset<T, ReservationStateCreateArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReservationStates.
     * @param {ReservationStateCreateManyArgs} args - Arguments to create many ReservationStates.
     * @example
     * // Create many ReservationStates
     * const reservationState = await prisma.reservationState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationStateCreateManyArgs>(args?: SelectSubset<T, ReservationStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationStates and returns the data saved in the database.
     * @param {ReservationStateCreateManyAndReturnArgs} args - Arguments to create many ReservationStates.
     * @example
     * // Create many ReservationStates
     * const reservationState = await prisma.reservationState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservationStates and only return the `reservationStateId`
     * const reservationStateWithReservationStateIdOnly = await prisma.reservationState.createManyAndReturn({ 
     *   select: { reservationStateId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationStateCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReservationState.
     * @param {ReservationStateDeleteArgs} args - Arguments to delete one ReservationState.
     * @example
     * // Delete one ReservationState
     * const ReservationState = await prisma.reservationState.delete({
     *   where: {
     *     // ... filter to delete one ReservationState
     *   }
     * })
     * 
     */
    delete<T extends ReservationStateDeleteArgs>(args: SelectSubset<T, ReservationStateDeleteArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReservationState.
     * @param {ReservationStateUpdateArgs} args - Arguments to update one ReservationState.
     * @example
     * // Update one ReservationState
     * const reservationState = await prisma.reservationState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationStateUpdateArgs>(args: SelectSubset<T, ReservationStateUpdateArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReservationStates.
     * @param {ReservationStateDeleteManyArgs} args - Arguments to filter ReservationStates to delete.
     * @example
     * // Delete a few ReservationStates
     * const { count } = await prisma.reservationState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationStateDeleteManyArgs>(args?: SelectSubset<T, ReservationStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationStates
     * const reservationState = await prisma.reservationState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationStateUpdateManyArgs>(args: SelectSubset<T, ReservationStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationState.
     * @param {ReservationStateUpsertArgs} args - Arguments to update or create a ReservationState.
     * @example
     * // Update or create a ReservationState
     * const reservationState = await prisma.reservationState.upsert({
     *   create: {
     *     // ... data to create a ReservationState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationState we want to update
     *   }
     * })
     */
    upsert<T extends ReservationStateUpsertArgs>(args: SelectSubset<T, ReservationStateUpsertArgs<ExtArgs>>): Prisma__ReservationStateClient<$Result.GetResult<Prisma.$ReservationStatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReservationStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateCountArgs} args - Arguments to filter ReservationStates to count.
     * @example
     * // Count the number of ReservationStates
     * const count = await prisma.reservationState.count({
     *   where: {
     *     // ... the filter for the ReservationStates we want to count
     *   }
     * })
    **/
    count<T extends ReservationStateCountArgs>(
      args?: Subset<T, ReservationStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationStateAggregateArgs>(args: Subset<T, ReservationStateAggregateArgs>): Prisma.PrismaPromise<GetReservationStateAggregateType<T>>

    /**
     * Group by ReservationState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationStateGroupByArgs} args - Group by arguments.
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
      T extends ReservationStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationStateGroupByArgs['orderBy'] }
        : { orderBy?: ReservationStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationState model
   */
  readonly fields: ReservationStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ReservationState model
   */ 
  interface ReservationStateFieldRefs {
    readonly reservationStateId: FieldRef<"ReservationState", 'String'>
    readonly reservationId: FieldRef<"ReservationState", 'String'>
    readonly status: FieldRef<"ReservationState", 'Status'>
    readonly adminComments: FieldRef<"ReservationState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReservationState findUnique
   */
  export type ReservationStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationState to fetch.
     */
    where: ReservationStateWhereUniqueInput
  }

  /**
   * ReservationState findUniqueOrThrow
   */
  export type ReservationStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationState to fetch.
     */
    where: ReservationStateWhereUniqueInput
  }

  /**
   * ReservationState findFirst
   */
  export type ReservationStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationState to fetch.
     */
    where?: ReservationStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationStates to fetch.
     */
    orderBy?: ReservationStateOrderByWithRelationInput | ReservationStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationStates.
     */
    cursor?: ReservationStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationStates.
     */
    distinct?: ReservationStateScalarFieldEnum | ReservationStateScalarFieldEnum[]
  }

  /**
   * ReservationState findFirstOrThrow
   */
  export type ReservationStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationState to fetch.
     */
    where?: ReservationStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationStates to fetch.
     */
    orderBy?: ReservationStateOrderByWithRelationInput | ReservationStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationStates.
     */
    cursor?: ReservationStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationStates.
     */
    distinct?: ReservationStateScalarFieldEnum | ReservationStateScalarFieldEnum[]
  }

  /**
   * ReservationState findMany
   */
  export type ReservationStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * Filter, which ReservationStates to fetch.
     */
    where?: ReservationStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationStates to fetch.
     */
    orderBy?: ReservationStateOrderByWithRelationInput | ReservationStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationStates.
     */
    cursor?: ReservationStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationStates.
     */
    skip?: number
    distinct?: ReservationStateScalarFieldEnum | ReservationStateScalarFieldEnum[]
  }

  /**
   * ReservationState create
   */
  export type ReservationStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationState.
     */
    data: XOR<ReservationStateCreateInput, ReservationStateUncheckedCreateInput>
  }

  /**
   * ReservationState createMany
   */
  export type ReservationStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationStates.
     */
    data: ReservationStateCreateManyInput | ReservationStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationState createManyAndReturn
   */
  export type ReservationStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReservationStates.
     */
    data: ReservationStateCreateManyInput | ReservationStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationState update
   */
  export type ReservationStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationState.
     */
    data: XOR<ReservationStateUpdateInput, ReservationStateUncheckedUpdateInput>
    /**
     * Choose, which ReservationState to update.
     */
    where: ReservationStateWhereUniqueInput
  }

  /**
   * ReservationState updateMany
   */
  export type ReservationStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationStates.
     */
    data: XOR<ReservationStateUpdateManyMutationInput, ReservationStateUncheckedUpdateManyInput>
    /**
     * Filter which ReservationStates to update
     */
    where?: ReservationStateWhereInput
  }

  /**
   * ReservationState upsert
   */
  export type ReservationStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationState to update in case it exists.
     */
    where: ReservationStateWhereUniqueInput
    /**
     * In case the ReservationState found by the `where` argument doesn't exist, create a new ReservationState with this data.
     */
    create: XOR<ReservationStateCreateInput, ReservationStateUncheckedCreateInput>
    /**
     * In case the ReservationState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationStateUpdateInput, ReservationStateUncheckedUpdateInput>
  }

  /**
   * ReservationState delete
   */
  export type ReservationStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
    /**
     * Filter which ReservationState to delete.
     */
    where: ReservationStateWhereUniqueInput
  }

  /**
   * ReservationState deleteMany
   */
  export type ReservationStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationStates to delete
     */
    where?: ReservationStateWhereInput
  }

  /**
   * ReservationState without action
   */
  export type ReservationStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationState
     */
    select?: ReservationStateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationStateInclude<ExtArgs> | null
  }


  /**
   * Model VenueDailyReservationCount
   */

  export type AggregateVenueDailyReservationCount = {
    _count: VenueDailyReservationCountCountAggregateOutputType | null
    _avg: VenueDailyReservationCountAvgAggregateOutputType | null
    _sum: VenueDailyReservationCountSumAggregateOutputType | null
    _min: VenueDailyReservationCountMinAggregateOutputType | null
    _max: VenueDailyReservationCountMaxAggregateOutputType | null
  }

  export type VenueDailyReservationCountAvgAggregateOutputType = {
    id: number | null
    venueId: number | null
    reservationCount: number | null
  }

  export type VenueDailyReservationCountSumAggregateOutputType = {
    id: number | null
    venueId: number | null
    reservationCount: number | null
  }

  export type VenueDailyReservationCountMinAggregateOutputType = {
    id: number | null
    venueId: number | null
    reservationCount: number | null
    date: Date | null
  }

  export type VenueDailyReservationCountMaxAggregateOutputType = {
    id: number | null
    venueId: number | null
    reservationCount: number | null
    date: Date | null
  }

  export type VenueDailyReservationCountCountAggregateOutputType = {
    id: number
    venueId: number
    reservationCount: number
    date: number
    _all: number
  }


  export type VenueDailyReservationCountAvgAggregateInputType = {
    id?: true
    venueId?: true
    reservationCount?: true
  }

  export type VenueDailyReservationCountSumAggregateInputType = {
    id?: true
    venueId?: true
    reservationCount?: true
  }

  export type VenueDailyReservationCountMinAggregateInputType = {
    id?: true
    venueId?: true
    reservationCount?: true
    date?: true
  }

  export type VenueDailyReservationCountMaxAggregateInputType = {
    id?: true
    venueId?: true
    reservationCount?: true
    date?: true
  }

  export type VenueDailyReservationCountCountAggregateInputType = {
    id?: true
    venueId?: true
    reservationCount?: true
    date?: true
    _all?: true
  }

  export type VenueDailyReservationCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueDailyReservationCount to aggregate.
     */
    where?: VenueDailyReservationCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueDailyReservationCounts to fetch.
     */
    orderBy?: VenueDailyReservationCountOrderByWithRelationInput | VenueDailyReservationCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueDailyReservationCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueDailyReservationCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueDailyReservationCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueDailyReservationCounts
    **/
    _count?: true | VenueDailyReservationCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueDailyReservationCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueDailyReservationCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueDailyReservationCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueDailyReservationCountMaxAggregateInputType
  }

  export type GetVenueDailyReservationCountAggregateType<T extends VenueDailyReservationCountAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueDailyReservationCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueDailyReservationCount[P]>
      : GetScalarType<T[P], AggregateVenueDailyReservationCount[P]>
  }




  export type VenueDailyReservationCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueDailyReservationCountWhereInput
    orderBy?: VenueDailyReservationCountOrderByWithAggregationInput | VenueDailyReservationCountOrderByWithAggregationInput[]
    by: VenueDailyReservationCountScalarFieldEnum[] | VenueDailyReservationCountScalarFieldEnum
    having?: VenueDailyReservationCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueDailyReservationCountCountAggregateInputType | true
    _avg?: VenueDailyReservationCountAvgAggregateInputType
    _sum?: VenueDailyReservationCountSumAggregateInputType
    _min?: VenueDailyReservationCountMinAggregateInputType
    _max?: VenueDailyReservationCountMaxAggregateInputType
  }

  export type VenueDailyReservationCountGroupByOutputType = {
    id: number
    venueId: number
    reservationCount: number
    date: Date
    _count: VenueDailyReservationCountCountAggregateOutputType | null
    _avg: VenueDailyReservationCountAvgAggregateOutputType | null
    _sum: VenueDailyReservationCountSumAggregateOutputType | null
    _min: VenueDailyReservationCountMinAggregateOutputType | null
    _max: VenueDailyReservationCountMaxAggregateOutputType | null
  }

  type GetVenueDailyReservationCountGroupByPayload<T extends VenueDailyReservationCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueDailyReservationCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueDailyReservationCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueDailyReservationCountGroupByOutputType[P]>
            : GetScalarType<T[P], VenueDailyReservationCountGroupByOutputType[P]>
        }
      >
    >


  export type VenueDailyReservationCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    reservationCount?: boolean
    date?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueDailyReservationCount"]>

  export type VenueDailyReservationCountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    reservationCount?: boolean
    date?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueDailyReservationCount"]>

  export type VenueDailyReservationCountSelectScalar = {
    id?: boolean
    venueId?: boolean
    reservationCount?: boolean
    date?: boolean
  }

  export type VenueDailyReservationCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type VenueDailyReservationCountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $VenueDailyReservationCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueDailyReservationCount"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venueId: number
      reservationCount: number
      date: Date
    }, ExtArgs["result"]["venueDailyReservationCount"]>
    composites: {}
  }

  type VenueDailyReservationCountGetPayload<S extends boolean | null | undefined | VenueDailyReservationCountDefaultArgs> = $Result.GetResult<Prisma.$VenueDailyReservationCountPayload, S>

  type VenueDailyReservationCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VenueDailyReservationCountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VenueDailyReservationCountCountAggregateInputType | true
    }

  export interface VenueDailyReservationCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueDailyReservationCount'], meta: { name: 'VenueDailyReservationCount' } }
    /**
     * Find zero or one VenueDailyReservationCount that matches the filter.
     * @param {VenueDailyReservationCountFindUniqueArgs} args - Arguments to find a VenueDailyReservationCount
     * @example
     * // Get one VenueDailyReservationCount
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueDailyReservationCountFindUniqueArgs>(args: SelectSubset<T, VenueDailyReservationCountFindUniqueArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VenueDailyReservationCount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VenueDailyReservationCountFindUniqueOrThrowArgs} args - Arguments to find a VenueDailyReservationCount
     * @example
     * // Get one VenueDailyReservationCount
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueDailyReservationCountFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueDailyReservationCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VenueDailyReservationCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountFindFirstArgs} args - Arguments to find a VenueDailyReservationCount
     * @example
     * // Get one VenueDailyReservationCount
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueDailyReservationCountFindFirstArgs>(args?: SelectSubset<T, VenueDailyReservationCountFindFirstArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VenueDailyReservationCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountFindFirstOrThrowArgs} args - Arguments to find a VenueDailyReservationCount
     * @example
     * // Get one VenueDailyReservationCount
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueDailyReservationCountFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueDailyReservationCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VenueDailyReservationCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueDailyReservationCounts
     * const venueDailyReservationCounts = await prisma.venueDailyReservationCount.findMany()
     * 
     * // Get first 10 VenueDailyReservationCounts
     * const venueDailyReservationCounts = await prisma.venueDailyReservationCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueDailyReservationCountWithIdOnly = await prisma.venueDailyReservationCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueDailyReservationCountFindManyArgs>(args?: SelectSubset<T, VenueDailyReservationCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VenueDailyReservationCount.
     * @param {VenueDailyReservationCountCreateArgs} args - Arguments to create a VenueDailyReservationCount.
     * @example
     * // Create one VenueDailyReservationCount
     * const VenueDailyReservationCount = await prisma.venueDailyReservationCount.create({
     *   data: {
     *     // ... data to create a VenueDailyReservationCount
     *   }
     * })
     * 
     */
    create<T extends VenueDailyReservationCountCreateArgs>(args: SelectSubset<T, VenueDailyReservationCountCreateArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VenueDailyReservationCounts.
     * @param {VenueDailyReservationCountCreateManyArgs} args - Arguments to create many VenueDailyReservationCounts.
     * @example
     * // Create many VenueDailyReservationCounts
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueDailyReservationCountCreateManyArgs>(args?: SelectSubset<T, VenueDailyReservationCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueDailyReservationCounts and returns the data saved in the database.
     * @param {VenueDailyReservationCountCreateManyAndReturnArgs} args - Arguments to create many VenueDailyReservationCounts.
     * @example
     * // Create many VenueDailyReservationCounts
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueDailyReservationCounts and only return the `id`
     * const venueDailyReservationCountWithIdOnly = await prisma.venueDailyReservationCount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueDailyReservationCountCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueDailyReservationCountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VenueDailyReservationCount.
     * @param {VenueDailyReservationCountDeleteArgs} args - Arguments to delete one VenueDailyReservationCount.
     * @example
     * // Delete one VenueDailyReservationCount
     * const VenueDailyReservationCount = await prisma.venueDailyReservationCount.delete({
     *   where: {
     *     // ... filter to delete one VenueDailyReservationCount
     *   }
     * })
     * 
     */
    delete<T extends VenueDailyReservationCountDeleteArgs>(args: SelectSubset<T, VenueDailyReservationCountDeleteArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VenueDailyReservationCount.
     * @param {VenueDailyReservationCountUpdateArgs} args - Arguments to update one VenueDailyReservationCount.
     * @example
     * // Update one VenueDailyReservationCount
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueDailyReservationCountUpdateArgs>(args: SelectSubset<T, VenueDailyReservationCountUpdateArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VenueDailyReservationCounts.
     * @param {VenueDailyReservationCountDeleteManyArgs} args - Arguments to filter VenueDailyReservationCounts to delete.
     * @example
     * // Delete a few VenueDailyReservationCounts
     * const { count } = await prisma.venueDailyReservationCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDailyReservationCountDeleteManyArgs>(args?: SelectSubset<T, VenueDailyReservationCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueDailyReservationCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueDailyReservationCounts
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueDailyReservationCountUpdateManyArgs>(args: SelectSubset<T, VenueDailyReservationCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VenueDailyReservationCount.
     * @param {VenueDailyReservationCountUpsertArgs} args - Arguments to update or create a VenueDailyReservationCount.
     * @example
     * // Update or create a VenueDailyReservationCount
     * const venueDailyReservationCount = await prisma.venueDailyReservationCount.upsert({
     *   create: {
     *     // ... data to create a VenueDailyReservationCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueDailyReservationCount we want to update
     *   }
     * })
     */
    upsert<T extends VenueDailyReservationCountUpsertArgs>(args: SelectSubset<T, VenueDailyReservationCountUpsertArgs<ExtArgs>>): Prisma__VenueDailyReservationCountClient<$Result.GetResult<Prisma.$VenueDailyReservationCountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VenueDailyReservationCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountCountArgs} args - Arguments to filter VenueDailyReservationCounts to count.
     * @example
     * // Count the number of VenueDailyReservationCounts
     * const count = await prisma.venueDailyReservationCount.count({
     *   where: {
     *     // ... the filter for the VenueDailyReservationCounts we want to count
     *   }
     * })
    **/
    count<T extends VenueDailyReservationCountCountArgs>(
      args?: Subset<T, VenueDailyReservationCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueDailyReservationCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueDailyReservationCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueDailyReservationCountAggregateArgs>(args: Subset<T, VenueDailyReservationCountAggregateArgs>): Prisma.PrismaPromise<GetVenueDailyReservationCountAggregateType<T>>

    /**
     * Group by VenueDailyReservationCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueDailyReservationCountGroupByArgs} args - Group by arguments.
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
      T extends VenueDailyReservationCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueDailyReservationCountGroupByArgs['orderBy'] }
        : { orderBy?: VenueDailyReservationCountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueDailyReservationCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueDailyReservationCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueDailyReservationCount model
   */
  readonly fields: VenueDailyReservationCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueDailyReservationCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueDailyReservationCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the VenueDailyReservationCount model
   */ 
  interface VenueDailyReservationCountFieldRefs {
    readonly id: FieldRef<"VenueDailyReservationCount", 'Int'>
    readonly venueId: FieldRef<"VenueDailyReservationCount", 'Int'>
    readonly reservationCount: FieldRef<"VenueDailyReservationCount", 'Int'>
    readonly date: FieldRef<"VenueDailyReservationCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VenueDailyReservationCount findUnique
   */
  export type VenueDailyReservationCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * Filter, which VenueDailyReservationCount to fetch.
     */
    where: VenueDailyReservationCountWhereUniqueInput
  }

  /**
   * VenueDailyReservationCount findUniqueOrThrow
   */
  export type VenueDailyReservationCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * Filter, which VenueDailyReservationCount to fetch.
     */
    where: VenueDailyReservationCountWhereUniqueInput
  }

  /**
   * VenueDailyReservationCount findFirst
   */
  export type VenueDailyReservationCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * Filter, which VenueDailyReservationCount to fetch.
     */
    where?: VenueDailyReservationCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueDailyReservationCounts to fetch.
     */
    orderBy?: VenueDailyReservationCountOrderByWithRelationInput | VenueDailyReservationCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueDailyReservationCounts.
     */
    cursor?: VenueDailyReservationCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueDailyReservationCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueDailyReservationCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueDailyReservationCounts.
     */
    distinct?: VenueDailyReservationCountScalarFieldEnum | VenueDailyReservationCountScalarFieldEnum[]
  }

  /**
   * VenueDailyReservationCount findFirstOrThrow
   */
  export type VenueDailyReservationCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * Filter, which VenueDailyReservationCount to fetch.
     */
    where?: VenueDailyReservationCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueDailyReservationCounts to fetch.
     */
    orderBy?: VenueDailyReservationCountOrderByWithRelationInput | VenueDailyReservationCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueDailyReservationCounts.
     */
    cursor?: VenueDailyReservationCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueDailyReservationCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueDailyReservationCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueDailyReservationCounts.
     */
    distinct?: VenueDailyReservationCountScalarFieldEnum | VenueDailyReservationCountScalarFieldEnum[]
  }

  /**
   * VenueDailyReservationCount findMany
   */
  export type VenueDailyReservationCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * Filter, which VenueDailyReservationCounts to fetch.
     */
    where?: VenueDailyReservationCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueDailyReservationCounts to fetch.
     */
    orderBy?: VenueDailyReservationCountOrderByWithRelationInput | VenueDailyReservationCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueDailyReservationCounts.
     */
    cursor?: VenueDailyReservationCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueDailyReservationCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueDailyReservationCounts.
     */
    skip?: number
    distinct?: VenueDailyReservationCountScalarFieldEnum | VenueDailyReservationCountScalarFieldEnum[]
  }

  /**
   * VenueDailyReservationCount create
   */
  export type VenueDailyReservationCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueDailyReservationCount.
     */
    data: XOR<VenueDailyReservationCountCreateInput, VenueDailyReservationCountUncheckedCreateInput>
  }

  /**
   * VenueDailyReservationCount createMany
   */
  export type VenueDailyReservationCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueDailyReservationCounts.
     */
    data: VenueDailyReservationCountCreateManyInput | VenueDailyReservationCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueDailyReservationCount createManyAndReturn
   */
  export type VenueDailyReservationCountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VenueDailyReservationCounts.
     */
    data: VenueDailyReservationCountCreateManyInput | VenueDailyReservationCountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VenueDailyReservationCount update
   */
  export type VenueDailyReservationCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueDailyReservationCount.
     */
    data: XOR<VenueDailyReservationCountUpdateInput, VenueDailyReservationCountUncheckedUpdateInput>
    /**
     * Choose, which VenueDailyReservationCount to update.
     */
    where: VenueDailyReservationCountWhereUniqueInput
  }

  /**
   * VenueDailyReservationCount updateMany
   */
  export type VenueDailyReservationCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueDailyReservationCounts.
     */
    data: XOR<VenueDailyReservationCountUpdateManyMutationInput, VenueDailyReservationCountUncheckedUpdateManyInput>
    /**
     * Filter which VenueDailyReservationCounts to update
     */
    where?: VenueDailyReservationCountWhereInput
  }

  /**
   * VenueDailyReservationCount upsert
   */
  export type VenueDailyReservationCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueDailyReservationCount to update in case it exists.
     */
    where: VenueDailyReservationCountWhereUniqueInput
    /**
     * In case the VenueDailyReservationCount found by the `where` argument doesn't exist, create a new VenueDailyReservationCount with this data.
     */
    create: XOR<VenueDailyReservationCountCreateInput, VenueDailyReservationCountUncheckedCreateInput>
    /**
     * In case the VenueDailyReservationCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueDailyReservationCountUpdateInput, VenueDailyReservationCountUncheckedUpdateInput>
  }

  /**
   * VenueDailyReservationCount delete
   */
  export type VenueDailyReservationCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
    /**
     * Filter which VenueDailyReservationCount to delete.
     */
    where: VenueDailyReservationCountWhereUniqueInput
  }

  /**
   * VenueDailyReservationCount deleteMany
   */
  export type VenueDailyReservationCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueDailyReservationCounts to delete
     */
    where?: VenueDailyReservationCountWhereInput
  }

  /**
   * VenueDailyReservationCount without action
   */
  export type VenueDailyReservationCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueDailyReservationCount
     */
    select?: VenueDailyReservationCountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueDailyReservationCountInclude<ExtArgs> | null
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
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    contactNumber: 'contactNumber',
    address: 'address',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    userType: 'userType',
    provider: 'provider'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    street_name: 'street_name',
    district: 'district',
    province: 'province',
    type: 'type',
    capacity: 'capacity',
    size: 'size',
    schedule: 'schedule',
    features: 'features',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const VenueAvailabilityScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    date: 'date',
    status: 'status'
  };

  export type VenueAvailabilityScalarFieldEnum = (typeof VenueAvailabilityScalarFieldEnum)[keyof typeof VenueAvailabilityScalarFieldEnum]


  export const TimeSlotScalarFieldEnum: {
    id: 'id',
    availabilityId: 'availabilityId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status'
  };

  export type TimeSlotScalarFieldEnum = (typeof TimeSlotScalarFieldEnum)[keyof typeof TimeSlotScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    reservationId: 'reservationId',
    userId: 'userId',
    venueId: 'venueId',
    title: 'title',
    purposeOfReservation: 'purposeOfReservation',
    timeDuration: 'timeDuration',
    extraServices: 'extraServices',
    reservationDate: 'reservationDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReservationStateScalarFieldEnum: {
    reservationStateId: 'reservationStateId',
    reservationId: 'reservationId',
    status: 'status',
    adminComments: 'adminComments'
  };

  export type ReservationStateScalarFieldEnum = (typeof ReservationStateScalarFieldEnum)[keyof typeof ReservationStateScalarFieldEnum]


  export const VenueDailyReservationCountScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    reservationCount: 'reservationCount',
    date: 'date'
  };

  export type VenueDailyReservationCountScalarFieldEnum = (typeof VenueDailyReservationCountScalarFieldEnum)[keyof typeof VenueDailyReservationCountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Schedule'
   */
  export type EnumScheduleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Schedule'>
    


  /**
   * Reference to a field of type 'Schedule[]'
   */
  export type ListEnumScheduleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Schedule[]'>
    


  /**
   * Reference to a field of type 'AvailabilityStatus'
   */
  export type EnumAvailabilityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AvailabilityStatus'>
    


  /**
   * Reference to a field of type 'AvailabilityStatus[]'
   */
  export type ListEnumAvailabilityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AvailabilityStatus[]'>
    


  /**
   * Reference to a field of type 'ExtraService[]'
   */
  export type ListEnumExtraServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtraService[]'>
    


  /**
   * Reference to a field of type 'ExtraService'
   */
  export type EnumExtraServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExtraService'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    contactNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    address?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    provider?: StringNullableFilter<"User"> | string | null
    reservations?: ReservationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    provider?: SortOrderInput | SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    contactNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    address?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    provider?: StringNullableFilter<"User"> | string | null
    reservations?: ReservationListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    provider?: SortOrderInput | SortOrder
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
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    contactNumber?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    email?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    email?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    email?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: IntFilter<"Venue"> | number
    name?: StringFilter<"Venue"> | string
    street_name?: StringNullableListFilter<"Venue">
    district?: StringFilter<"Venue"> | string
    province?: StringFilter<"Venue"> | string
    type?: StringFilter<"Venue"> | string
    capacity?: IntFilter<"Venue"> | number
    size?: IntFilter<"Venue"> | number
    schedule?: EnumScheduleFilter<"Venue"> | $Enums.Schedule
    features?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    availability?: VenueAvailabilityListRelationFilter
    reservations?: ReservationListRelationFilter
    dailyReservationCounts?: VenueDailyReservationCountListRelationFilter
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    street_name?: SortOrder
    district?: SortOrder
    province?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
    schedule?: SortOrder
    features?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availability?: VenueAvailabilityOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    dailyReservationCounts?: VenueDailyReservationCountOrderByRelationAggregateInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    name?: StringFilter<"Venue"> | string
    street_name?: StringNullableListFilter<"Venue">
    district?: StringFilter<"Venue"> | string
    province?: StringFilter<"Venue"> | string
    type?: StringFilter<"Venue"> | string
    capacity?: IntFilter<"Venue"> | number
    size?: IntFilter<"Venue"> | number
    schedule?: EnumScheduleFilter<"Venue"> | $Enums.Schedule
    features?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    availability?: VenueAvailabilityListRelationFilter
    reservations?: ReservationListRelationFilter
    dailyReservationCounts?: VenueDailyReservationCountListRelationFilter
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    street_name?: SortOrder
    district?: SortOrder
    province?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
    schedule?: SortOrder
    features?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venue"> | number
    name?: StringWithAggregatesFilter<"Venue"> | string
    street_name?: StringNullableListFilter<"Venue">
    district?: StringWithAggregatesFilter<"Venue"> | string
    province?: StringWithAggregatesFilter<"Venue"> | string
    type?: StringWithAggregatesFilter<"Venue"> | string
    capacity?: IntWithAggregatesFilter<"Venue"> | number
    size?: IntWithAggregatesFilter<"Venue"> | number
    schedule?: EnumScheduleWithAggregatesFilter<"Venue"> | $Enums.Schedule
    features?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
  }

  export type VenueAvailabilityWhereInput = {
    AND?: VenueAvailabilityWhereInput | VenueAvailabilityWhereInput[]
    OR?: VenueAvailabilityWhereInput[]
    NOT?: VenueAvailabilityWhereInput | VenueAvailabilityWhereInput[]
    id?: IntFilter<"VenueAvailability"> | number
    venueId?: IntFilter<"VenueAvailability"> | number
    date?: DateTimeFilter<"VenueAvailability"> | Date | string
    status?: EnumAvailabilityStatusFilter<"VenueAvailability"> | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotListRelationFilter
    venue?: XOR<VenueRelationFilter, VenueWhereInput>
  }

  export type VenueAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    timeSlots?: TimeSlotOrderByRelationAggregateInput
    venue?: VenueOrderByWithRelationInput
  }

  export type VenueAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenueAvailabilityWhereInput | VenueAvailabilityWhereInput[]
    OR?: VenueAvailabilityWhereInput[]
    NOT?: VenueAvailabilityWhereInput | VenueAvailabilityWhereInput[]
    venueId?: IntFilter<"VenueAvailability"> | number
    date?: DateTimeFilter<"VenueAvailability"> | Date | string
    status?: EnumAvailabilityStatusFilter<"VenueAvailability"> | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotListRelationFilter
    venue?: XOR<VenueRelationFilter, VenueWhereInput>
  }, "id">

  export type VenueAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    _count?: VenueAvailabilityCountOrderByAggregateInput
    _avg?: VenueAvailabilityAvgOrderByAggregateInput
    _max?: VenueAvailabilityMaxOrderByAggregateInput
    _min?: VenueAvailabilityMinOrderByAggregateInput
    _sum?: VenueAvailabilitySumOrderByAggregateInput
  }

  export type VenueAvailabilityScalarWhereWithAggregatesInput = {
    AND?: VenueAvailabilityScalarWhereWithAggregatesInput | VenueAvailabilityScalarWhereWithAggregatesInput[]
    OR?: VenueAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: VenueAvailabilityScalarWhereWithAggregatesInput | VenueAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VenueAvailability"> | number
    venueId?: IntWithAggregatesFilter<"VenueAvailability"> | number
    date?: DateTimeWithAggregatesFilter<"VenueAvailability"> | Date | string
    status?: EnumAvailabilityStatusWithAggregatesFilter<"VenueAvailability"> | $Enums.AvailabilityStatus
  }

  export type TimeSlotWhereInput = {
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    id?: IntFilter<"TimeSlot"> | number
    availabilityId?: IntFilter<"TimeSlot"> | number
    startTime?: DateTimeFilter<"TimeSlot"> | Date | string
    endTime?: DateTimeFilter<"TimeSlot"> | Date | string
    status?: EnumAvailabilityStatusFilter<"TimeSlot"> | $Enums.AvailabilityStatus
    venueAvailability?: XOR<VenueAvailabilityRelationFilter, VenueAvailabilityWhereInput>
  }

  export type TimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    availabilityId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    venueAvailability?: VenueAvailabilityOrderByWithRelationInput
  }

  export type TimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TimeSlotWhereInput | TimeSlotWhereInput[]
    OR?: TimeSlotWhereInput[]
    NOT?: TimeSlotWhereInput | TimeSlotWhereInput[]
    availabilityId?: IntFilter<"TimeSlot"> | number
    startTime?: DateTimeFilter<"TimeSlot"> | Date | string
    endTime?: DateTimeFilter<"TimeSlot"> | Date | string
    status?: EnumAvailabilityStatusFilter<"TimeSlot"> | $Enums.AvailabilityStatus
    venueAvailability?: XOR<VenueAvailabilityRelationFilter, VenueAvailabilityWhereInput>
  }, "id">

  export type TimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    availabilityId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    _count?: TimeSlotCountOrderByAggregateInput
    _avg?: TimeSlotAvgOrderByAggregateInput
    _max?: TimeSlotMaxOrderByAggregateInput
    _min?: TimeSlotMinOrderByAggregateInput
    _sum?: TimeSlotSumOrderByAggregateInput
  }

  export type TimeSlotScalarWhereWithAggregatesInput = {
    AND?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    OR?: TimeSlotScalarWhereWithAggregatesInput[]
    NOT?: TimeSlotScalarWhereWithAggregatesInput | TimeSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TimeSlot"> | number
    availabilityId?: IntWithAggregatesFilter<"TimeSlot"> | number
    startTime?: DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"TimeSlot"> | Date | string
    status?: EnumAvailabilityStatusWithAggregatesFilter<"TimeSlot"> | $Enums.AvailabilityStatus
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    reservationId?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    venueId?: IntFilter<"Reservation"> | number
    title?: StringFilter<"Reservation"> | string
    purposeOfReservation?: StringFilter<"Reservation"> | string
    timeDuration?: IntFilter<"Reservation"> | number
    extraServices?: EnumExtraServiceNullableListFilter<"Reservation">
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    venue?: XOR<VenueRelationFilter, VenueWhereInput>
    reservationState?: XOR<ReservationStateNullableRelationFilter, ReservationStateWhereInput> | null
  }

  export type ReservationOrderByWithRelationInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    extraServices?: SortOrder
    reservationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
    reservationState?: ReservationStateOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    reservationId?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    userId?: StringFilter<"Reservation"> | string
    venueId?: IntFilter<"Reservation"> | number
    title?: StringFilter<"Reservation"> | string
    purposeOfReservation?: StringFilter<"Reservation"> | string
    timeDuration?: IntFilter<"Reservation"> | number
    extraServices?: EnumExtraServiceNullableListFilter<"Reservation">
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    venue?: XOR<VenueRelationFilter, VenueWhereInput>
    reservationState?: XOR<ReservationStateNullableRelationFilter, ReservationStateWhereInput> | null
  }, "reservationId">

  export type ReservationOrderByWithAggregationInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    extraServices?: SortOrder
    reservationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    reservationId?: StringWithAggregatesFilter<"Reservation"> | string
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    venueId?: IntWithAggregatesFilter<"Reservation"> | number
    title?: StringWithAggregatesFilter<"Reservation"> | string
    purposeOfReservation?: StringWithAggregatesFilter<"Reservation"> | string
    timeDuration?: IntWithAggregatesFilter<"Reservation"> | number
    extraServices?: EnumExtraServiceNullableListFilter<"Reservation">
    reservationDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ReservationStateWhereInput = {
    AND?: ReservationStateWhereInput | ReservationStateWhereInput[]
    OR?: ReservationStateWhereInput[]
    NOT?: ReservationStateWhereInput | ReservationStateWhereInput[]
    reservationStateId?: StringFilter<"ReservationState"> | string
    reservationId?: StringFilter<"ReservationState"> | string
    status?: EnumStatusFilter<"ReservationState"> | $Enums.Status
    adminComments?: StringNullableFilter<"ReservationState"> | string | null
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }

  export type ReservationStateOrderByWithRelationInput = {
    reservationStateId?: SortOrder
    reservationId?: SortOrder
    status?: SortOrder
    adminComments?: SortOrderInput | SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type ReservationStateWhereUniqueInput = Prisma.AtLeast<{
    reservationStateId?: string
    reservationId?: string
    AND?: ReservationStateWhereInput | ReservationStateWhereInput[]
    OR?: ReservationStateWhereInput[]
    NOT?: ReservationStateWhereInput | ReservationStateWhereInput[]
    status?: EnumStatusFilter<"ReservationState"> | $Enums.Status
    adminComments?: StringNullableFilter<"ReservationState"> | string | null
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
  }, "reservationStateId" | "reservationId">

  export type ReservationStateOrderByWithAggregationInput = {
    reservationStateId?: SortOrder
    reservationId?: SortOrder
    status?: SortOrder
    adminComments?: SortOrderInput | SortOrder
    _count?: ReservationStateCountOrderByAggregateInput
    _max?: ReservationStateMaxOrderByAggregateInput
    _min?: ReservationStateMinOrderByAggregateInput
  }

  export type ReservationStateScalarWhereWithAggregatesInput = {
    AND?: ReservationStateScalarWhereWithAggregatesInput | ReservationStateScalarWhereWithAggregatesInput[]
    OR?: ReservationStateScalarWhereWithAggregatesInput[]
    NOT?: ReservationStateScalarWhereWithAggregatesInput | ReservationStateScalarWhereWithAggregatesInput[]
    reservationStateId?: StringWithAggregatesFilter<"ReservationState"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationState"> | string
    status?: EnumStatusWithAggregatesFilter<"ReservationState"> | $Enums.Status
    adminComments?: StringNullableWithAggregatesFilter<"ReservationState"> | string | null
  }

  export type VenueDailyReservationCountWhereInput = {
    AND?: VenueDailyReservationCountWhereInput | VenueDailyReservationCountWhereInput[]
    OR?: VenueDailyReservationCountWhereInput[]
    NOT?: VenueDailyReservationCountWhereInput | VenueDailyReservationCountWhereInput[]
    id?: IntFilter<"VenueDailyReservationCount"> | number
    venueId?: IntFilter<"VenueDailyReservationCount"> | number
    reservationCount?: IntFilter<"VenueDailyReservationCount"> | number
    date?: DateTimeFilter<"VenueDailyReservationCount"> | Date | string
    venue?: XOR<VenueRelationFilter, VenueWhereInput>
  }

  export type VenueDailyReservationCountOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
    date?: SortOrder
    venue?: VenueOrderByWithRelationInput
  }

  export type VenueDailyReservationCountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    venueId_date?: VenueDailyReservationCountVenueIdDateCompoundUniqueInput
    AND?: VenueDailyReservationCountWhereInput | VenueDailyReservationCountWhereInput[]
    OR?: VenueDailyReservationCountWhereInput[]
    NOT?: VenueDailyReservationCountWhereInput | VenueDailyReservationCountWhereInput[]
    venueId?: IntFilter<"VenueDailyReservationCount"> | number
    reservationCount?: IntFilter<"VenueDailyReservationCount"> | number
    date?: DateTimeFilter<"VenueDailyReservationCount"> | Date | string
    venue?: XOR<VenueRelationFilter, VenueWhereInput>
  }, "id" | "venueId_date">

  export type VenueDailyReservationCountOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
    date?: SortOrder
    _count?: VenueDailyReservationCountCountOrderByAggregateInput
    _avg?: VenueDailyReservationCountAvgOrderByAggregateInput
    _max?: VenueDailyReservationCountMaxOrderByAggregateInput
    _min?: VenueDailyReservationCountMinOrderByAggregateInput
    _sum?: VenueDailyReservationCountSumOrderByAggregateInput
  }

  export type VenueDailyReservationCountScalarWhereWithAggregatesInput = {
    AND?: VenueDailyReservationCountScalarWhereWithAggregatesInput | VenueDailyReservationCountScalarWhereWithAggregatesInput[]
    OR?: VenueDailyReservationCountScalarWhereWithAggregatesInput[]
    NOT?: VenueDailyReservationCountScalarWhereWithAggregatesInput | VenueDailyReservationCountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VenueDailyReservationCount"> | number
    venueId?: IntWithAggregatesFilter<"VenueDailyReservationCount"> | number
    reservationCount?: IntWithAggregatesFilter<"VenueDailyReservationCount"> | number
    date?: DateTimeWithAggregatesFilter<"VenueDailyReservationCount"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: bigint | number | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    reservations?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: bigint | number | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: bigint | number | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    email: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    email: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    email: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateInput = {
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateInput = {
    id?: number
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: number
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueAvailabilityCreateInput = {
    date: Date | string
    status: $Enums.AvailabilityStatus
    timeSlots?: TimeSlotCreateNestedManyWithoutVenueAvailabilityInput
    venue: VenueCreateNestedOneWithoutAvailabilityInput
  }

  export type VenueAvailabilityUncheckedCreateInput = {
    id?: number
    venueId: number
    date: Date | string
    status: $Enums.AvailabilityStatus
    timeSlots?: TimeSlotUncheckedCreateNestedManyWithoutVenueAvailabilityInput
  }

  export type VenueAvailabilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotUpdateManyWithoutVenueAvailabilityNestedInput
    venue?: VenueUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type VenueAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotUncheckedUpdateManyWithoutVenueAvailabilityNestedInput
  }

  export type VenueAvailabilityCreateManyInput = {
    id?: number
    venueId: number
    date: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type VenueAvailabilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type VenueAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type TimeSlotCreateInput = {
    startTime: Date | string
    endTime: Date | string
    status: $Enums.AvailabilityStatus
    venueAvailability: VenueAvailabilityCreateNestedOneWithoutTimeSlotsInput
  }

  export type TimeSlotUncheckedCreateInput = {
    id?: number
    availabilityId: number
    startTime: Date | string
    endTime: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type TimeSlotUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
    venueAvailability?: VenueAvailabilityUpdateOneRequiredWithoutTimeSlotsNestedInput
  }

  export type TimeSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type TimeSlotCreateManyInput = {
    id?: number
    availabilityId: number
    startTime: Date | string
    endTime: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type TimeSlotUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type TimeSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    availabilityId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type ReservationCreateInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    venue: VenueCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    reservationId?: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservationState?: ReservationStateUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    reservationId?: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationStateCreateInput = {
    reservationStateId?: string
    status: $Enums.Status
    adminComments?: string | null
    reservation: ReservationCreateNestedOneWithoutReservationStateInput
  }

  export type ReservationStateUncheckedCreateInput = {
    reservationStateId?: string
    reservationId: string
    status: $Enums.Status
    adminComments?: string | null
  }

  export type ReservationStateUpdateInput = {
    reservationStateId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    adminComments?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateOneRequiredWithoutReservationStateNestedInput
  }

  export type ReservationStateUncheckedUpdateInput = {
    reservationStateId?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    adminComments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationStateCreateManyInput = {
    reservationStateId?: string
    reservationId: string
    status: $Enums.Status
    adminComments?: string | null
  }

  export type ReservationStateUpdateManyMutationInput = {
    reservationStateId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    adminComments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationStateUncheckedUpdateManyInput = {
    reservationStateId?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    adminComments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VenueDailyReservationCountCreateInput = {
    reservationCount: number
    date: Date | string
    venue: VenueCreateNestedOneWithoutDailyReservationCountsInput
  }

  export type VenueDailyReservationCountUncheckedCreateInput = {
    id?: number
    venueId: number
    reservationCount: number
    date: Date | string
  }

  export type VenueDailyReservationCountUpdateInput = {
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutDailyReservationCountsNestedInput
  }

  export type VenueDailyReservationCountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueDailyReservationCountCreateManyInput = {
    id?: number
    venueId: number
    reservationCount: number
    date: Date | string
  }

  export type VenueDailyReservationCountUpdateManyMutationInput = {
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueDailyReservationCountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    provider?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    contactNumber?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    provider?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    userType?: SortOrder
    provider?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    contactNumber?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumScheduleFilter<$PrismaModel = never> = {
    equals?: $Enums.Schedule | EnumScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleFilter<$PrismaModel> | $Enums.Schedule
  }

  export type VenueAvailabilityListRelationFilter = {
    every?: VenueAvailabilityWhereInput
    some?: VenueAvailabilityWhereInput
    none?: VenueAvailabilityWhereInput
  }

  export type VenueDailyReservationCountListRelationFilter = {
    every?: VenueDailyReservationCountWhereInput
    some?: VenueDailyReservationCountWhereInput
    none?: VenueDailyReservationCountWhereInput
  }

  export type VenueAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueDailyReservationCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    street_name?: SortOrder
    district?: SortOrder
    province?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
    schedule?: SortOrder
    features?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    province?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
    schedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    district?: SortOrder
    province?: SortOrder
    type?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
    schedule?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    size?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumScheduleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Schedule | EnumScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleWithAggregatesFilter<$PrismaModel> | $Enums.Schedule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleFilter<$PrismaModel>
    _max?: NestedEnumScheduleFilter<$PrismaModel>
  }

  export type EnumAvailabilityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AvailabilityStatus | EnumAvailabilityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityStatusFilter<$PrismaModel> | $Enums.AvailabilityStatus
  }

  export type TimeSlotListRelationFilter = {
    every?: TimeSlotWhereInput
    some?: TimeSlotWhereInput
    none?: TimeSlotWhereInput
  }

  export type VenueRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type TimeSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type VenueAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
  }

  export type VenueAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type VenueAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    date?: SortOrder
    status?: SortOrder
  }

  export type VenueAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
  }

  export type EnumAvailabilityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AvailabilityStatus | EnumAvailabilityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityStatusWithAggregatesFilter<$PrismaModel> | $Enums.AvailabilityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvailabilityStatusFilter<$PrismaModel>
    _max?: NestedEnumAvailabilityStatusFilter<$PrismaModel>
  }

  export type VenueAvailabilityRelationFilter = {
    is?: VenueAvailabilityWhereInput
    isNot?: VenueAvailabilityWhereInput
  }

  export type TimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type TimeSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
  }

  export type TimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type TimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
  }

  export type TimeSlotSumOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
  }

  export type EnumExtraServiceNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ExtraService[] | ListEnumExtraServiceFieldRefInput<$PrismaModel> | null
    has?: $Enums.ExtraService | EnumExtraServiceFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ExtraService[] | ListEnumExtraServiceFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ExtraService[] | ListEnumExtraServiceFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReservationStateNullableRelationFilter = {
    is?: ReservationStateWhereInput | null
    isNot?: ReservationStateWhereInput | null
  }

  export type ReservationCountOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    extraServices?: SortOrder
    reservationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    venueId?: SortOrder
    timeDuration?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    reservationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    reservationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    venueId?: SortOrder
    timeDuration?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type ReservationRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type ReservationStateCountOrderByAggregateInput = {
    reservationStateId?: SortOrder
    reservationId?: SortOrder
    status?: SortOrder
    adminComments?: SortOrder
  }

  export type ReservationStateMaxOrderByAggregateInput = {
    reservationStateId?: SortOrder
    reservationId?: SortOrder
    status?: SortOrder
    adminComments?: SortOrder
  }

  export type ReservationStateMinOrderByAggregateInput = {
    reservationStateId?: SortOrder
    reservationId?: SortOrder
    status?: SortOrder
    adminComments?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type VenueDailyReservationCountVenueIdDateCompoundUniqueInput = {
    venueId: number
    date: Date | string
  }

  export type VenueDailyReservationCountCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
    date?: SortOrder
  }

  export type VenueDailyReservationCountAvgOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
  }

  export type VenueDailyReservationCountMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
    date?: SortOrder
  }

  export type VenueDailyReservationCountMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
    date?: SortOrder
  }

  export type VenueDailyReservationCountSumOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    reservationCount?: SortOrder
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VenueCreatestreet_nameInput = {
    set: string[]
  }

  export type VenueCreatefeaturesInput = {
    set: string[]
  }

  export type VenueCreateimagesInput = {
    set: string[]
  }

  export type VenueAvailabilityCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueAvailabilityCreateWithoutVenueInput, VenueAvailabilityUncheckedCreateWithoutVenueInput> | VenueAvailabilityCreateWithoutVenueInput[] | VenueAvailabilityUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueAvailabilityCreateOrConnectWithoutVenueInput | VenueAvailabilityCreateOrConnectWithoutVenueInput[]
    createMany?: VenueAvailabilityCreateManyVenueInputEnvelope
    connect?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutVenueInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type VenueDailyReservationCountCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueDailyReservationCountCreateWithoutVenueInput, VenueDailyReservationCountUncheckedCreateWithoutVenueInput> | VenueDailyReservationCountCreateWithoutVenueInput[] | VenueDailyReservationCountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueDailyReservationCountCreateOrConnectWithoutVenueInput | VenueDailyReservationCountCreateOrConnectWithoutVenueInput[]
    createMany?: VenueDailyReservationCountCreateManyVenueInputEnvelope
    connect?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
  }

  export type VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueAvailabilityCreateWithoutVenueInput, VenueAvailabilityUncheckedCreateWithoutVenueInput> | VenueAvailabilityCreateWithoutVenueInput[] | VenueAvailabilityUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueAvailabilityCreateOrConnectWithoutVenueInput | VenueAvailabilityCreateOrConnectWithoutVenueInput[]
    createMany?: VenueAvailabilityCreateManyVenueInputEnvelope
    connect?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type VenueDailyReservationCountUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<VenueDailyReservationCountCreateWithoutVenueInput, VenueDailyReservationCountUncheckedCreateWithoutVenueInput> | VenueDailyReservationCountCreateWithoutVenueInput[] | VenueDailyReservationCountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueDailyReservationCountCreateOrConnectWithoutVenueInput | VenueDailyReservationCountCreateOrConnectWithoutVenueInput[]
    createMany?: VenueDailyReservationCountCreateManyVenueInputEnvelope
    connect?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
  }

  export type VenueUpdatestreet_nameInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumScheduleFieldUpdateOperationsInput = {
    set?: $Enums.Schedule
  }

  export type VenueUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VenueUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VenueAvailabilityUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueAvailabilityCreateWithoutVenueInput, VenueAvailabilityUncheckedCreateWithoutVenueInput> | VenueAvailabilityCreateWithoutVenueInput[] | VenueAvailabilityUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueAvailabilityCreateOrConnectWithoutVenueInput | VenueAvailabilityCreateOrConnectWithoutVenueInput[]
    upsert?: VenueAvailabilityUpsertWithWhereUniqueWithoutVenueInput | VenueAvailabilityUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueAvailabilityCreateManyVenueInputEnvelope
    set?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    disconnect?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    delete?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    connect?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    update?: VenueAvailabilityUpdateWithWhereUniqueWithoutVenueInput | VenueAvailabilityUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueAvailabilityUpdateManyWithWhereWithoutVenueInput | VenueAvailabilityUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueAvailabilityScalarWhereInput | VenueAvailabilityScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutVenueNestedInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVenueInput | ReservationUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVenueInput | ReservationUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVenueInput | ReservationUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type VenueDailyReservationCountUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueDailyReservationCountCreateWithoutVenueInput, VenueDailyReservationCountUncheckedCreateWithoutVenueInput> | VenueDailyReservationCountCreateWithoutVenueInput[] | VenueDailyReservationCountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueDailyReservationCountCreateOrConnectWithoutVenueInput | VenueDailyReservationCountCreateOrConnectWithoutVenueInput[]
    upsert?: VenueDailyReservationCountUpsertWithWhereUniqueWithoutVenueInput | VenueDailyReservationCountUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueDailyReservationCountCreateManyVenueInputEnvelope
    set?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    disconnect?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    delete?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    connect?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    update?: VenueDailyReservationCountUpdateWithWhereUniqueWithoutVenueInput | VenueDailyReservationCountUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueDailyReservationCountUpdateManyWithWhereWithoutVenueInput | VenueDailyReservationCountUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueDailyReservationCountScalarWhereInput | VenueDailyReservationCountScalarWhereInput[]
  }

  export type VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueAvailabilityCreateWithoutVenueInput, VenueAvailabilityUncheckedCreateWithoutVenueInput> | VenueAvailabilityCreateWithoutVenueInput[] | VenueAvailabilityUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueAvailabilityCreateOrConnectWithoutVenueInput | VenueAvailabilityCreateOrConnectWithoutVenueInput[]
    upsert?: VenueAvailabilityUpsertWithWhereUniqueWithoutVenueInput | VenueAvailabilityUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueAvailabilityCreateManyVenueInputEnvelope
    set?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    disconnect?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    delete?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    connect?: VenueAvailabilityWhereUniqueInput | VenueAvailabilityWhereUniqueInput[]
    update?: VenueAvailabilityUpdateWithWhereUniqueWithoutVenueInput | VenueAvailabilityUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueAvailabilityUpdateManyWithWhereWithoutVenueInput | VenueAvailabilityUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueAvailabilityScalarWhereInput | VenueAvailabilityScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVenueInput | ReservationUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVenueInput | ReservationUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVenueInput | ReservationUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type VenueDailyReservationCountUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<VenueDailyReservationCountCreateWithoutVenueInput, VenueDailyReservationCountUncheckedCreateWithoutVenueInput> | VenueDailyReservationCountCreateWithoutVenueInput[] | VenueDailyReservationCountUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: VenueDailyReservationCountCreateOrConnectWithoutVenueInput | VenueDailyReservationCountCreateOrConnectWithoutVenueInput[]
    upsert?: VenueDailyReservationCountUpsertWithWhereUniqueWithoutVenueInput | VenueDailyReservationCountUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: VenueDailyReservationCountCreateManyVenueInputEnvelope
    set?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    disconnect?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    delete?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    connect?: VenueDailyReservationCountWhereUniqueInput | VenueDailyReservationCountWhereUniqueInput[]
    update?: VenueDailyReservationCountUpdateWithWhereUniqueWithoutVenueInput | VenueDailyReservationCountUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: VenueDailyReservationCountUpdateManyWithWhereWithoutVenueInput | VenueDailyReservationCountUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: VenueDailyReservationCountScalarWhereInput | VenueDailyReservationCountScalarWhereInput[]
  }

  export type TimeSlotCreateNestedManyWithoutVenueAvailabilityInput = {
    create?: XOR<TimeSlotCreateWithoutVenueAvailabilityInput, TimeSlotUncheckedCreateWithoutVenueAvailabilityInput> | TimeSlotCreateWithoutVenueAvailabilityInput[] | TimeSlotUncheckedCreateWithoutVenueAvailabilityInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutVenueAvailabilityInput | TimeSlotCreateOrConnectWithoutVenueAvailabilityInput[]
    createMany?: TimeSlotCreateManyVenueAvailabilityInputEnvelope
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
  }

  export type VenueCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<VenueCreateWithoutAvailabilityInput, VenueUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: VenueCreateOrConnectWithoutAvailabilityInput
    connect?: VenueWhereUniqueInput
  }

  export type TimeSlotUncheckedCreateNestedManyWithoutVenueAvailabilityInput = {
    create?: XOR<TimeSlotCreateWithoutVenueAvailabilityInput, TimeSlotUncheckedCreateWithoutVenueAvailabilityInput> | TimeSlotCreateWithoutVenueAvailabilityInput[] | TimeSlotUncheckedCreateWithoutVenueAvailabilityInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutVenueAvailabilityInput | TimeSlotCreateOrConnectWithoutVenueAvailabilityInput[]
    createMany?: TimeSlotCreateManyVenueAvailabilityInputEnvelope
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
  }

  export type EnumAvailabilityStatusFieldUpdateOperationsInput = {
    set?: $Enums.AvailabilityStatus
  }

  export type TimeSlotUpdateManyWithoutVenueAvailabilityNestedInput = {
    create?: XOR<TimeSlotCreateWithoutVenueAvailabilityInput, TimeSlotUncheckedCreateWithoutVenueAvailabilityInput> | TimeSlotCreateWithoutVenueAvailabilityInput[] | TimeSlotUncheckedCreateWithoutVenueAvailabilityInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutVenueAvailabilityInput | TimeSlotCreateOrConnectWithoutVenueAvailabilityInput[]
    upsert?: TimeSlotUpsertWithWhereUniqueWithoutVenueAvailabilityInput | TimeSlotUpsertWithWhereUniqueWithoutVenueAvailabilityInput[]
    createMany?: TimeSlotCreateManyVenueAvailabilityInputEnvelope
    set?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    disconnect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    delete?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    update?: TimeSlotUpdateWithWhereUniqueWithoutVenueAvailabilityInput | TimeSlotUpdateWithWhereUniqueWithoutVenueAvailabilityInput[]
    updateMany?: TimeSlotUpdateManyWithWhereWithoutVenueAvailabilityInput | TimeSlotUpdateManyWithWhereWithoutVenueAvailabilityInput[]
    deleteMany?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
  }

  export type VenueUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<VenueCreateWithoutAvailabilityInput, VenueUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: VenueCreateOrConnectWithoutAvailabilityInput
    upsert?: VenueUpsertWithoutAvailabilityInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutAvailabilityInput, VenueUpdateWithoutAvailabilityInput>, VenueUncheckedUpdateWithoutAvailabilityInput>
  }

  export type TimeSlotUncheckedUpdateManyWithoutVenueAvailabilityNestedInput = {
    create?: XOR<TimeSlotCreateWithoutVenueAvailabilityInput, TimeSlotUncheckedCreateWithoutVenueAvailabilityInput> | TimeSlotCreateWithoutVenueAvailabilityInput[] | TimeSlotUncheckedCreateWithoutVenueAvailabilityInput[]
    connectOrCreate?: TimeSlotCreateOrConnectWithoutVenueAvailabilityInput | TimeSlotCreateOrConnectWithoutVenueAvailabilityInput[]
    upsert?: TimeSlotUpsertWithWhereUniqueWithoutVenueAvailabilityInput | TimeSlotUpsertWithWhereUniqueWithoutVenueAvailabilityInput[]
    createMany?: TimeSlotCreateManyVenueAvailabilityInputEnvelope
    set?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    disconnect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    delete?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    connect?: TimeSlotWhereUniqueInput | TimeSlotWhereUniqueInput[]
    update?: TimeSlotUpdateWithWhereUniqueWithoutVenueAvailabilityInput | TimeSlotUpdateWithWhereUniqueWithoutVenueAvailabilityInput[]
    updateMany?: TimeSlotUpdateManyWithWhereWithoutVenueAvailabilityInput | TimeSlotUpdateManyWithWhereWithoutVenueAvailabilityInput[]
    deleteMany?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
  }

  export type VenueAvailabilityCreateNestedOneWithoutTimeSlotsInput = {
    create?: XOR<VenueAvailabilityCreateWithoutTimeSlotsInput, VenueAvailabilityUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: VenueAvailabilityCreateOrConnectWithoutTimeSlotsInput
    connect?: VenueAvailabilityWhereUniqueInput
  }

  export type VenueAvailabilityUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: XOR<VenueAvailabilityCreateWithoutTimeSlotsInput, VenueAvailabilityUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: VenueAvailabilityCreateOrConnectWithoutTimeSlotsInput
    upsert?: VenueAvailabilityUpsertWithoutTimeSlotsInput
    connect?: VenueAvailabilityWhereUniqueInput
    update?: XOR<XOR<VenueAvailabilityUpdateToOneWithWhereWithoutTimeSlotsInput, VenueAvailabilityUpdateWithoutTimeSlotsInput>, VenueAvailabilityUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type ReservationCreateextraServicesInput = {
    set: $Enums.ExtraService[]
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutReservationsInput = {
    create?: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutReservationsInput
    connect?: VenueWhereUniqueInput
  }

  export type ReservationStateCreateNestedOneWithoutReservationInput = {
    create?: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ReservationStateCreateOrConnectWithoutReservationInput
    connect?: ReservationStateWhereUniqueInput
  }

  export type ReservationStateUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ReservationStateCreateOrConnectWithoutReservationInput
    connect?: ReservationStateWhereUniqueInput
  }

  export type ReservationUpdateextraServicesInput = {
    set?: $Enums.ExtraService[]
    push?: $Enums.ExtraService | $Enums.ExtraService[]
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type VenueUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutReservationsInput
    upsert?: VenueUpsertWithoutReservationsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutReservationsInput, VenueUpdateWithoutReservationsInput>, VenueUncheckedUpdateWithoutReservationsInput>
  }

  export type ReservationStateUpdateOneWithoutReservationNestedInput = {
    create?: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ReservationStateCreateOrConnectWithoutReservationInput
    upsert?: ReservationStateUpsertWithoutReservationInput
    disconnect?: ReservationStateWhereInput | boolean
    delete?: ReservationStateWhereInput | boolean
    connect?: ReservationStateWhereUniqueInput
    update?: XOR<XOR<ReservationStateUpdateToOneWithWhereWithoutReservationInput, ReservationStateUpdateWithoutReservationInput>, ReservationStateUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationStateUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ReservationStateCreateOrConnectWithoutReservationInput
    upsert?: ReservationStateUpsertWithoutReservationInput
    disconnect?: ReservationStateWhereInput | boolean
    delete?: ReservationStateWhereInput | boolean
    connect?: ReservationStateWhereUniqueInput
    update?: XOR<XOR<ReservationStateUpdateToOneWithWhereWithoutReservationInput, ReservationStateUpdateWithoutReservationInput>, ReservationStateUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationCreateNestedOneWithoutReservationStateInput = {
    create?: XOR<ReservationCreateWithoutReservationStateInput, ReservationUncheckedCreateWithoutReservationStateInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutReservationStateInput
    connect?: ReservationWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ReservationUpdateOneRequiredWithoutReservationStateNestedInput = {
    create?: XOR<ReservationCreateWithoutReservationStateInput, ReservationUncheckedCreateWithoutReservationStateInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutReservationStateInput
    upsert?: ReservationUpsertWithoutReservationStateInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutReservationStateInput, ReservationUpdateWithoutReservationStateInput>, ReservationUncheckedUpdateWithoutReservationStateInput>
  }

  export type VenueCreateNestedOneWithoutDailyReservationCountsInput = {
    create?: XOR<VenueCreateWithoutDailyReservationCountsInput, VenueUncheckedCreateWithoutDailyReservationCountsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutDailyReservationCountsInput
    connect?: VenueWhereUniqueInput
  }

  export type VenueUpdateOneRequiredWithoutDailyReservationCountsNestedInput = {
    create?: XOR<VenueCreateWithoutDailyReservationCountsInput, VenueUncheckedCreateWithoutDailyReservationCountsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutDailyReservationCountsInput
    upsert?: VenueUpsertWithoutDailyReservationCountsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutDailyReservationCountsInput, VenueUpdateWithoutDailyReservationCountsInput>, VenueUncheckedUpdateWithoutDailyReservationCountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumScheduleFilter<$PrismaModel = never> = {
    equals?: $Enums.Schedule | EnumScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleFilter<$PrismaModel> | $Enums.Schedule
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumScheduleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Schedule | EnumScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Schedule[] | ListEnumScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumScheduleWithAggregatesFilter<$PrismaModel> | $Enums.Schedule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleFilter<$PrismaModel>
    _max?: NestedEnumScheduleFilter<$PrismaModel>
  }

  export type NestedEnumAvailabilityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AvailabilityStatus | EnumAvailabilityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityStatusFilter<$PrismaModel> | $Enums.AvailabilityStatus
  }

  export type NestedEnumAvailabilityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AvailabilityStatus | EnumAvailabilityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AvailabilityStatus[] | ListEnumAvailabilityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityStatusWithAggregatesFilter<$PrismaModel> | $Enums.AvailabilityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvailabilityStatusFilter<$PrismaModel>
    _max?: NestedEnumAvailabilityStatusFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type ReservationCreateWithoutUserInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    venue: VenueCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    reservationId?: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservationState?: ReservationStateUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    reservationId?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    venueId?: IntFilter<"Reservation"> | number
    title?: StringFilter<"Reservation"> | string
    purposeOfReservation?: StringFilter<"Reservation"> | string
    timeDuration?: IntFilter<"Reservation"> | number
    extraServices?: EnumExtraServiceNullableListFilter<"Reservation">
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type VenueAvailabilityCreateWithoutVenueInput = {
    date: Date | string
    status: $Enums.AvailabilityStatus
    timeSlots?: TimeSlotCreateNestedManyWithoutVenueAvailabilityInput
  }

  export type VenueAvailabilityUncheckedCreateWithoutVenueInput = {
    id?: number
    date: Date | string
    status: $Enums.AvailabilityStatus
    timeSlots?: TimeSlotUncheckedCreateNestedManyWithoutVenueAvailabilityInput
  }

  export type VenueAvailabilityCreateOrConnectWithoutVenueInput = {
    where: VenueAvailabilityWhereUniqueInput
    create: XOR<VenueAvailabilityCreateWithoutVenueInput, VenueAvailabilityUncheckedCreateWithoutVenueInput>
  }

  export type VenueAvailabilityCreateManyVenueInputEnvelope = {
    data: VenueAvailabilityCreateManyVenueInput | VenueAvailabilityCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutVenueInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutVenueInput = {
    reservationId?: string
    userId: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservationState?: ReservationStateUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutVenueInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput>
  }

  export type ReservationCreateManyVenueInputEnvelope = {
    data: ReservationCreateManyVenueInput | ReservationCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type VenueDailyReservationCountCreateWithoutVenueInput = {
    reservationCount: number
    date: Date | string
  }

  export type VenueDailyReservationCountUncheckedCreateWithoutVenueInput = {
    id?: number
    reservationCount: number
    date: Date | string
  }

  export type VenueDailyReservationCountCreateOrConnectWithoutVenueInput = {
    where: VenueDailyReservationCountWhereUniqueInput
    create: XOR<VenueDailyReservationCountCreateWithoutVenueInput, VenueDailyReservationCountUncheckedCreateWithoutVenueInput>
  }

  export type VenueDailyReservationCountCreateManyVenueInputEnvelope = {
    data: VenueDailyReservationCountCreateManyVenueInput | VenueDailyReservationCountCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type VenueAvailabilityUpsertWithWhereUniqueWithoutVenueInput = {
    where: VenueAvailabilityWhereUniqueInput
    update: XOR<VenueAvailabilityUpdateWithoutVenueInput, VenueAvailabilityUncheckedUpdateWithoutVenueInput>
    create: XOR<VenueAvailabilityCreateWithoutVenueInput, VenueAvailabilityUncheckedCreateWithoutVenueInput>
  }

  export type VenueAvailabilityUpdateWithWhereUniqueWithoutVenueInput = {
    where: VenueAvailabilityWhereUniqueInput
    data: XOR<VenueAvailabilityUpdateWithoutVenueInput, VenueAvailabilityUncheckedUpdateWithoutVenueInput>
  }

  export type VenueAvailabilityUpdateManyWithWhereWithoutVenueInput = {
    where: VenueAvailabilityScalarWhereInput
    data: XOR<VenueAvailabilityUpdateManyMutationInput, VenueAvailabilityUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenueAvailabilityScalarWhereInput = {
    AND?: VenueAvailabilityScalarWhereInput | VenueAvailabilityScalarWhereInput[]
    OR?: VenueAvailabilityScalarWhereInput[]
    NOT?: VenueAvailabilityScalarWhereInput | VenueAvailabilityScalarWhereInput[]
    id?: IntFilter<"VenueAvailability"> | number
    venueId?: IntFilter<"VenueAvailability"> | number
    date?: DateTimeFilter<"VenueAvailability"> | Date | string
    status?: EnumAvailabilityStatusFilter<"VenueAvailability"> | $Enums.AvailabilityStatus
  }

  export type ReservationUpsertWithWhereUniqueWithoutVenueInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutVenueInput, ReservationUncheckedUpdateWithoutVenueInput>
    create: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutVenueInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutVenueInput, ReservationUncheckedUpdateWithoutVenueInput>
  }

  export type ReservationUpdateManyWithWhereWithoutVenueInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenueDailyReservationCountUpsertWithWhereUniqueWithoutVenueInput = {
    where: VenueDailyReservationCountWhereUniqueInput
    update: XOR<VenueDailyReservationCountUpdateWithoutVenueInput, VenueDailyReservationCountUncheckedUpdateWithoutVenueInput>
    create: XOR<VenueDailyReservationCountCreateWithoutVenueInput, VenueDailyReservationCountUncheckedCreateWithoutVenueInput>
  }

  export type VenueDailyReservationCountUpdateWithWhereUniqueWithoutVenueInput = {
    where: VenueDailyReservationCountWhereUniqueInput
    data: XOR<VenueDailyReservationCountUpdateWithoutVenueInput, VenueDailyReservationCountUncheckedUpdateWithoutVenueInput>
  }

  export type VenueDailyReservationCountUpdateManyWithWhereWithoutVenueInput = {
    where: VenueDailyReservationCountScalarWhereInput
    data: XOR<VenueDailyReservationCountUpdateManyMutationInput, VenueDailyReservationCountUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenueDailyReservationCountScalarWhereInput = {
    AND?: VenueDailyReservationCountScalarWhereInput | VenueDailyReservationCountScalarWhereInput[]
    OR?: VenueDailyReservationCountScalarWhereInput[]
    NOT?: VenueDailyReservationCountScalarWhereInput | VenueDailyReservationCountScalarWhereInput[]
    id?: IntFilter<"VenueDailyReservationCount"> | number
    venueId?: IntFilter<"VenueDailyReservationCount"> | number
    reservationCount?: IntFilter<"VenueDailyReservationCount"> | number
    date?: DateTimeFilter<"VenueDailyReservationCount"> | Date | string
  }

  export type TimeSlotCreateWithoutVenueAvailabilityInput = {
    startTime: Date | string
    endTime: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type TimeSlotUncheckedCreateWithoutVenueAvailabilityInput = {
    id?: number
    startTime: Date | string
    endTime: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type TimeSlotCreateOrConnectWithoutVenueAvailabilityInput = {
    where: TimeSlotWhereUniqueInput
    create: XOR<TimeSlotCreateWithoutVenueAvailabilityInput, TimeSlotUncheckedCreateWithoutVenueAvailabilityInput>
  }

  export type TimeSlotCreateManyVenueAvailabilityInputEnvelope = {
    data: TimeSlotCreateManyVenueAvailabilityInput | TimeSlotCreateManyVenueAvailabilityInput[]
    skipDuplicates?: boolean
  }

  export type VenueCreateWithoutAvailabilityInput = {
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutAvailabilityInput = {
    id?: number
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutAvailabilityInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutAvailabilityInput, VenueUncheckedCreateWithoutAvailabilityInput>
  }

  export type TimeSlotUpsertWithWhereUniqueWithoutVenueAvailabilityInput = {
    where: TimeSlotWhereUniqueInput
    update: XOR<TimeSlotUpdateWithoutVenueAvailabilityInput, TimeSlotUncheckedUpdateWithoutVenueAvailabilityInput>
    create: XOR<TimeSlotCreateWithoutVenueAvailabilityInput, TimeSlotUncheckedCreateWithoutVenueAvailabilityInput>
  }

  export type TimeSlotUpdateWithWhereUniqueWithoutVenueAvailabilityInput = {
    where: TimeSlotWhereUniqueInput
    data: XOR<TimeSlotUpdateWithoutVenueAvailabilityInput, TimeSlotUncheckedUpdateWithoutVenueAvailabilityInput>
  }

  export type TimeSlotUpdateManyWithWhereWithoutVenueAvailabilityInput = {
    where: TimeSlotScalarWhereInput
    data: XOR<TimeSlotUpdateManyMutationInput, TimeSlotUncheckedUpdateManyWithoutVenueAvailabilityInput>
  }

  export type TimeSlotScalarWhereInput = {
    AND?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
    OR?: TimeSlotScalarWhereInput[]
    NOT?: TimeSlotScalarWhereInput | TimeSlotScalarWhereInput[]
    id?: IntFilter<"TimeSlot"> | number
    availabilityId?: IntFilter<"TimeSlot"> | number
    startTime?: DateTimeFilter<"TimeSlot"> | Date | string
    endTime?: DateTimeFilter<"TimeSlot"> | Date | string
    status?: EnumAvailabilityStatusFilter<"TimeSlot"> | $Enums.AvailabilityStatus
  }

  export type VenueUpsertWithoutAvailabilityInput = {
    update: XOR<VenueUpdateWithoutAvailabilityInput, VenueUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<VenueCreateWithoutAvailabilityInput, VenueUncheckedCreateWithoutAvailabilityInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutAvailabilityInput, VenueUncheckedUpdateWithoutAvailabilityInput>
  }

  export type VenueUpdateWithoutAvailabilityInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueAvailabilityCreateWithoutTimeSlotsInput = {
    date: Date | string
    status: $Enums.AvailabilityStatus
    venue: VenueCreateNestedOneWithoutAvailabilityInput
  }

  export type VenueAvailabilityUncheckedCreateWithoutTimeSlotsInput = {
    id?: number
    venueId: number
    date: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type VenueAvailabilityCreateOrConnectWithoutTimeSlotsInput = {
    where: VenueAvailabilityWhereUniqueInput
    create: XOR<VenueAvailabilityCreateWithoutTimeSlotsInput, VenueAvailabilityUncheckedCreateWithoutTimeSlotsInput>
  }

  export type VenueAvailabilityUpsertWithoutTimeSlotsInput = {
    update: XOR<VenueAvailabilityUpdateWithoutTimeSlotsInput, VenueAvailabilityUncheckedUpdateWithoutTimeSlotsInput>
    create: XOR<VenueAvailabilityCreateWithoutTimeSlotsInput, VenueAvailabilityUncheckedCreateWithoutTimeSlotsInput>
    where?: VenueAvailabilityWhereInput
  }

  export type VenueAvailabilityUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: VenueAvailabilityWhereInput
    data: XOR<VenueAvailabilityUpdateWithoutTimeSlotsInput, VenueAvailabilityUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type VenueAvailabilityUpdateWithoutTimeSlotsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
    venue?: VenueUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type VenueAvailabilityUncheckedUpdateWithoutTimeSlotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type UserCreateWithoutReservationsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: bigint | number | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: bigint | number | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type VenueCreateWithoutReservationsInput = {
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutReservationsInput = {
    id?: number
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutReservationsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
  }

  export type ReservationStateCreateWithoutReservationInput = {
    reservationStateId?: string
    status: $Enums.Status
    adminComments?: string | null
  }

  export type ReservationStateUncheckedCreateWithoutReservationInput = {
    reservationStateId?: string
    status: $Enums.Status
    adminComments?: string | null
  }

  export type ReservationStateCreateOrConnectWithoutReservationInput = {
    where: ReservationStateWhereUniqueInput
    create: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VenueUpsertWithoutReservationsInput = {
    update: XOR<VenueUpdateWithoutReservationsInput, VenueUncheckedUpdateWithoutReservationsInput>
    create: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutReservationsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutReservationsInput, VenueUncheckedUpdateWithoutReservationsInput>
  }

  export type VenueUpdateWithoutReservationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type ReservationStateUpsertWithoutReservationInput = {
    update: XOR<ReservationStateUpdateWithoutReservationInput, ReservationStateUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
    where?: ReservationStateWhereInput
  }

  export type ReservationStateUpdateToOneWithWhereWithoutReservationInput = {
    where?: ReservationStateWhereInput
    data: XOR<ReservationStateUpdateWithoutReservationInput, ReservationStateUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationStateUpdateWithoutReservationInput = {
    reservationStateId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    adminComments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationStateUncheckedUpdateWithoutReservationInput = {
    reservationStateId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    adminComments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationCreateWithoutReservationStateInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    venue: VenueCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutReservationStateInput = {
    reservationId?: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutReservationStateInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutReservationStateInput, ReservationUncheckedCreateWithoutReservationStateInput>
  }

  export type ReservationUpsertWithoutReservationStateInput = {
    update: XOR<ReservationUpdateWithoutReservationStateInput, ReservationUncheckedUpdateWithoutReservationStateInput>
    create: XOR<ReservationCreateWithoutReservationStateInput, ReservationUncheckedCreateWithoutReservationStateInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutReservationStateInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutReservationStateInput, ReservationUncheckedUpdateWithoutReservationStateInput>
  }

  export type ReservationUpdateWithoutReservationStateInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutReservationStateInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateWithoutDailyReservationCountsInput = {
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutDailyReservationCountsInput = {
    id?: number
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutDailyReservationCountsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutDailyReservationCountsInput, VenueUncheckedCreateWithoutDailyReservationCountsInput>
  }

  export type VenueUpsertWithoutDailyReservationCountsInput = {
    update: XOR<VenueUpdateWithoutDailyReservationCountsInput, VenueUncheckedUpdateWithoutDailyReservationCountsInput>
    create: XOR<VenueCreateWithoutDailyReservationCountsInput, VenueUncheckedCreateWithoutDailyReservationCountsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutDailyReservationCountsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutDailyReservationCountsInput, VenueUncheckedUpdateWithoutDailyReservationCountsInput>
  }

  export type VenueUpdateWithoutDailyReservationCountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutDailyReservationCountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type ReservationCreateManyUserInput = {
    reservationId?: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutUserInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueAvailabilityCreateManyVenueInput = {
    id?: number
    date: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type ReservationCreateManyVenueInput = {
    reservationId?: string
    userId: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | $Enums.ExtraService[]
    reservationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueDailyReservationCountCreateManyVenueInput = {
    id?: number
    reservationCount: number
    date: Date | string
  }

  export type VenueAvailabilityUpdateWithoutVenueInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotUpdateManyWithoutVenueAvailabilityNestedInput
  }

  export type VenueAvailabilityUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotUncheckedUpdateManyWithoutVenueAvailabilityNestedInput
  }

  export type VenueAvailabilityUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type ReservationUpdateWithoutVenueInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVenueInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutVenueInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | $Enums.ExtraService[]
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueDailyReservationCountUpdateWithoutVenueInput = {
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueDailyReservationCountUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueDailyReservationCountUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeSlotCreateManyVenueAvailabilityInput = {
    id?: number
    startTime: Date | string
    endTime: Date | string
    status: $Enums.AvailabilityStatus
  }

  export type TimeSlotUpdateWithoutVenueAvailabilityInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type TimeSlotUncheckedUpdateWithoutVenueAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }

  export type TimeSlotUncheckedUpdateManyWithoutVenueAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAvailabilityStatusFieldUpdateOperationsInput | $Enums.AvailabilityStatus
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VenueCountOutputTypeDefaultArgs instead
     */
    export type VenueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VenueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VenueAvailabilityCountOutputTypeDefaultArgs instead
     */
    export type VenueAvailabilityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VenueAvailabilityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VenueDefaultArgs instead
     */
    export type VenueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VenueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VenueAvailabilityDefaultArgs instead
     */
    export type VenueAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VenueAvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeSlotDefaultArgs instead
     */
    export type TimeSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeSlotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationStateDefaultArgs instead
     */
    export type ReservationStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationStateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VenueDailyReservationCountDefaultArgs instead
     */
    export type VenueDailyReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VenueDailyReservationCountDefaultArgs<ExtArgs>

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