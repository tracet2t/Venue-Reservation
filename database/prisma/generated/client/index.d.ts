
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
 * Model ReservationTimeSlot
 * 
 */
export type ReservationTimeSlot = $Result.DefaultSelection<Prisma.$ReservationTimeSlotPayload>
/**
 * Model ReservationState
 * 
 */
export type ReservationState = $Result.DefaultSelection<Prisma.$ReservationStatePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model VenueDailyReservationCount
 * 
 */
export type VenueDailyReservationCount = $Result.DefaultSelection<Prisma.$VenueDailyReservationCountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>

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


export const Status: {
  Pending: 'Pending',
  Rejected: 'Rejected',
  Accepted: 'Accepted',
  Canceled: 'Canceled',
  Done: 'Done'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type Schedule = $Enums.Schedule

export const Schedule: typeof $Enums.Schedule

export type AvailabilityStatus = $Enums.AvailabilityStatus

export const AvailabilityStatus: typeof $Enums.AvailabilityStatus

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
   * `prisma.reservationTimeSlot`: Exposes CRUD operations for the **ReservationTimeSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationTimeSlots
    * const reservationTimeSlots = await prisma.reservationTimeSlot.findMany()
    * ```
    */
  get reservationTimeSlot(): Prisma.ReservationTimeSlotDelegate<ExtArgs>;

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
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.venueDailyReservationCount`: Exposes CRUD operations for the **VenueDailyReservationCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueDailyReservationCounts
    * const venueDailyReservationCounts = await prisma.venueDailyReservationCount.findMany()
    * ```
    */
  get venueDailyReservationCount(): Prisma.VenueDailyReservationCountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.21.1
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    ReservationTimeSlot: 'ReservationTimeSlot',
    ReservationState: 'ReservationState',
    Question: 'Question',
    VenueDailyReservationCount: 'VenueDailyReservationCount',
    Session: 'Session',
    Account: 'Account'
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
      modelProps: "user" | "verificationToken" | "venue" | "venueAvailability" | "timeSlot" | "reservation" | "reservationTimeSlot" | "reservationState" | "question" | "venueDailyReservationCount" | "session" | "account"
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
      ReservationTimeSlot: {
        payload: Prisma.$ReservationTimeSlotPayload<ExtArgs>
        fields: Prisma.ReservationTimeSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationTimeSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationTimeSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>
          }
          findFirst: {
            args: Prisma.ReservationTimeSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationTimeSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>
          }
          findMany: {
            args: Prisma.ReservationTimeSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>[]
          }
          create: {
            args: Prisma.ReservationTimeSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>
          }
          createMany: {
            args: Prisma.ReservationTimeSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationTimeSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>[]
          }
          delete: {
            args: Prisma.ReservationTimeSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>
          }
          update: {
            args: Prisma.ReservationTimeSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>
          }
          deleteMany: {
            args: Prisma.ReservationTimeSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationTimeSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationTimeSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTimeSlotPayload>
          }
          aggregate: {
            args: Prisma.ReservationTimeSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationTimeSlot>
          }
          groupBy: {
            args: Prisma.ReservationTimeSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationTimeSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationTimeSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationTimeSlotCountAggregateOutputType> | number
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
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
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
    venues: number
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
    venues?: boolean | UserCountOutputTypeCountVenuesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    availability: number
    reservations: number
    questions: number
    dailyReservationCounts: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | VenueCountOutputTypeCountAvailabilityArgs
    reservations?: boolean | VenueCountOutputTypeCountReservationsArgs
    questions?: boolean | VenueCountOutputTypeCountQuestionsArgs
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
  export type VenueCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
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
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    questions: number
    timeSlots: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ReservationCountOutputTypeCountQuestionsArgs
    timeSlots?: boolean | ReservationCountOutputTypeCountTimeSlotsArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountTimeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationTimeSlotWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    contactNumber: string | null
    address: string | null
    email: string | null
    emailVerified: boolean | null
    password: string | null
    userType: $Enums.UserType | null
    provider: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    profilePicture: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    firstName: string | null
    lastName: string | null
    contactNumber: string | null
    address: string | null
    email: string | null
    emailVerified: boolean | null
    password: string | null
    userType: $Enums.UserType | null
    provider: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    profilePicture: string | null
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
    resetToken: number
    resetTokenExpiry: number
    profilePicture: number
    _all: number
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
    resetToken?: true
    resetTokenExpiry?: true
    profilePicture?: true
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
    resetToken?: true
    resetTokenExpiry?: true
    profilePicture?: true
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
    resetToken?: true
    resetTokenExpiry?: true
    profilePicture?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    firstName: string
    lastName: string | null
    contactNumber: string | null
    address: string | null
    email: string
    emailVerified: boolean
    password: string | null
    userType: $Enums.UserType
    provider: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    profilePicture: string | null
    _count: UserCountAggregateOutputType | null
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
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    venues?: boolean | User$venuesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
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
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
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
    resetToken?: boolean
    resetTokenExpiry?: boolean
    profilePicture?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    venues?: boolean | User$venuesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      venues: Prisma.$VenuePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      firstName: string
      lastName: string | null
      contactNumber: string | null
      address: string | null
      email: string
      emailVerified: boolean
      password: string | null
      userType: $Enums.UserType
      provider: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      profilePicture: string | null
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
    venues<T extends User$venuesArgs<ExtArgs> = {}>(args?: Subset<T, User$venuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly contactNumber: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
    readonly provider: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly profilePicture: FieldRef<"User", 'String'>
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
    limit?: number
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
   * User.venues
   */
  export type User$venuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    cursor?: VenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
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
    limit?: number
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
    limit?: number
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
    adminId: string | null
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
    adminId: string | null
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
    amenments: number
    images: number
    createdAt: number
    updatedAt: number
    adminId: number
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
    adminId?: true
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
    adminId?: true
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
    amenments?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    adminId?: true
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
    amenments: string[]
    images: string[]
    createdAt: Date
    updatedAt: Date
    adminId: string | null
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
    amenments?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    availability?: boolean | Venue$availabilityArgs<ExtArgs>
    reservations?: boolean | Venue$reservationsArgs<ExtArgs>
    questions?: boolean | Venue$questionsArgs<ExtArgs>
    admin?: boolean | Venue$adminArgs<ExtArgs>
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
    amenments?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
    admin?: boolean | Venue$adminArgs<ExtArgs>
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
    amenments?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adminId?: boolean
  }

  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | Venue$availabilityArgs<ExtArgs>
    reservations?: boolean | Venue$reservationsArgs<ExtArgs>
    questions?: boolean | Venue$questionsArgs<ExtArgs>
    admin?: boolean | Venue$adminArgs<ExtArgs>
    dailyReservationCounts?: boolean | Venue$dailyReservationCountsArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Venue$adminArgs<ExtArgs>
  }

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      availability: Prisma.$VenueAvailabilityPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      admin: Prisma.$UserPayload<ExtArgs> | null
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
      amenments: string[]
      images: string[]
      createdAt: Date
      updatedAt: Date
      adminId: string | null
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
    questions<T extends Venue$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    admin<T extends Venue$adminArgs<ExtArgs> = {}>(args?: Subset<T, Venue$adminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
    readonly amenments: FieldRef<"Venue", 'String[]'>
    readonly images: FieldRef<"Venue", 'String[]'>
    readonly createdAt: FieldRef<"Venue", 'DateTime'>
    readonly updatedAt: FieldRef<"Venue", 'DateTime'>
    readonly adminId: FieldRef<"Venue", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeCreateManyAndReturn<ExtArgs> | null
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
    limit?: number
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
    limit?: number
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
   * Venue.questions
   */
  export type Venue$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Venue.admin
   */
  export type Venue$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
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
    limit?: number
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
    limit?: number
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
    limit?: number
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
    limit?: number
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
    extraServices: string[]
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
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Reservation$questionsArgs<ExtArgs>
    timeSlots?: boolean | Reservation$timeSlotsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    reservationState?: boolean | Reservation$reservationStateArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reservationId?: boolean
    userId?: boolean
    venueId?: boolean
    title?: boolean
    purposeOfReservation?: boolean
    timeDuration?: boolean
    extraServices?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Reservation$questionsArgs<ExtArgs>
    timeSlots?: boolean | Reservation$timeSlotsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    reservationState?: boolean | Reservation$reservationStateArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      timeSlots: Prisma.$ReservationTimeSlotPayload<ExtArgs>[]
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
      extraServices: string[]
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
    questions<T extends Reservation$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    timeSlots<T extends Reservation$timeSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$timeSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly extraServices: FieldRef<"Reservation", 'String[]'>
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
    limit?: number
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
    limit?: number
  }

  /**
   * Reservation.questions
   */
  export type Reservation$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Reservation.timeSlots
   */
  export type Reservation$timeSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    where?: ReservationTimeSlotWhereInput
    orderBy?: ReservationTimeSlotOrderByWithRelationInput | ReservationTimeSlotOrderByWithRelationInput[]
    cursor?: ReservationTimeSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationTimeSlotScalarFieldEnum | ReservationTimeSlotScalarFieldEnum[]
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
   * Model ReservationTimeSlot
   */

  export type AggregateReservationTimeSlot = {
    _count: ReservationTimeSlotCountAggregateOutputType | null
    _min: ReservationTimeSlotMinAggregateOutputType | null
    _max: ReservationTimeSlotMaxAggregateOutputType | null
  }

  export type ReservationTimeSlotMinAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    reservationId: string | null
  }

  export type ReservationTimeSlotMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    startTime: string | null
    endTime: string | null
    reservationId: string | null
  }

  export type ReservationTimeSlotCountAggregateOutputType = {
    id: number
    date: number
    startTime: number
    endTime: number
    reservationId: number
    _all: number
  }


  export type ReservationTimeSlotMinAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    reservationId?: true
  }

  export type ReservationTimeSlotMaxAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    reservationId?: true
  }

  export type ReservationTimeSlotCountAggregateInputType = {
    id?: true
    date?: true
    startTime?: true
    endTime?: true
    reservationId?: true
    _all?: true
  }

  export type ReservationTimeSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationTimeSlot to aggregate.
     */
    where?: ReservationTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTimeSlots to fetch.
     */
    orderBy?: ReservationTimeSlotOrderByWithRelationInput | ReservationTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationTimeSlots
    **/
    _count?: true | ReservationTimeSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationTimeSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationTimeSlotMaxAggregateInputType
  }

  export type GetReservationTimeSlotAggregateType<T extends ReservationTimeSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationTimeSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationTimeSlot[P]>
      : GetScalarType<T[P], AggregateReservationTimeSlot[P]>
  }




  export type ReservationTimeSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationTimeSlotWhereInput
    orderBy?: ReservationTimeSlotOrderByWithAggregationInput | ReservationTimeSlotOrderByWithAggregationInput[]
    by: ReservationTimeSlotScalarFieldEnum[] | ReservationTimeSlotScalarFieldEnum
    having?: ReservationTimeSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationTimeSlotCountAggregateInputType | true
    _min?: ReservationTimeSlotMinAggregateInputType
    _max?: ReservationTimeSlotMaxAggregateInputType
  }

  export type ReservationTimeSlotGroupByOutputType = {
    id: string
    date: Date
    startTime: string
    endTime: string
    reservationId: string
    _count: ReservationTimeSlotCountAggregateOutputType | null
    _min: ReservationTimeSlotMinAggregateOutputType | null
    _max: ReservationTimeSlotMaxAggregateOutputType | null
  }

  type GetReservationTimeSlotGroupByPayload<T extends ReservationTimeSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationTimeSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationTimeSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationTimeSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationTimeSlotGroupByOutputType[P]>
        }
      >
    >


  export type ReservationTimeSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationTimeSlot"]>

  export type ReservationTimeSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationTimeSlot"]>

  export type ReservationTimeSlotSelectScalar = {
    id?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    reservationId?: boolean
  }

  export type ReservationTimeSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type ReservationTimeSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $ReservationTimeSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationTimeSlot"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      startTime: string
      endTime: string
      reservationId: string
    }, ExtArgs["result"]["reservationTimeSlot"]>
    composites: {}
  }

  type ReservationTimeSlotGetPayload<S extends boolean | null | undefined | ReservationTimeSlotDefaultArgs> = $Result.GetResult<Prisma.$ReservationTimeSlotPayload, S>

  type ReservationTimeSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationTimeSlotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationTimeSlotCountAggregateInputType | true
    }

  export interface ReservationTimeSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationTimeSlot'], meta: { name: 'ReservationTimeSlot' } }
    /**
     * Find zero or one ReservationTimeSlot that matches the filter.
     * @param {ReservationTimeSlotFindUniqueArgs} args - Arguments to find a ReservationTimeSlot
     * @example
     * // Get one ReservationTimeSlot
     * const reservationTimeSlot = await prisma.reservationTimeSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationTimeSlotFindUniqueArgs>(args: SelectSubset<T, ReservationTimeSlotFindUniqueArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReservationTimeSlot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationTimeSlotFindUniqueOrThrowArgs} args - Arguments to find a ReservationTimeSlot
     * @example
     * // Get one ReservationTimeSlot
     * const reservationTimeSlot = await prisma.reservationTimeSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationTimeSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationTimeSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReservationTimeSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotFindFirstArgs} args - Arguments to find a ReservationTimeSlot
     * @example
     * // Get one ReservationTimeSlot
     * const reservationTimeSlot = await prisma.reservationTimeSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationTimeSlotFindFirstArgs>(args?: SelectSubset<T, ReservationTimeSlotFindFirstArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReservationTimeSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotFindFirstOrThrowArgs} args - Arguments to find a ReservationTimeSlot
     * @example
     * // Get one ReservationTimeSlot
     * const reservationTimeSlot = await prisma.reservationTimeSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationTimeSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationTimeSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReservationTimeSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationTimeSlots
     * const reservationTimeSlots = await prisma.reservationTimeSlot.findMany()
     * 
     * // Get first 10 ReservationTimeSlots
     * const reservationTimeSlots = await prisma.reservationTimeSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationTimeSlotWithIdOnly = await prisma.reservationTimeSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationTimeSlotFindManyArgs>(args?: SelectSubset<T, ReservationTimeSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReservationTimeSlot.
     * @param {ReservationTimeSlotCreateArgs} args - Arguments to create a ReservationTimeSlot.
     * @example
     * // Create one ReservationTimeSlot
     * const ReservationTimeSlot = await prisma.reservationTimeSlot.create({
     *   data: {
     *     // ... data to create a ReservationTimeSlot
     *   }
     * })
     * 
     */
    create<T extends ReservationTimeSlotCreateArgs>(args: SelectSubset<T, ReservationTimeSlotCreateArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReservationTimeSlots.
     * @param {ReservationTimeSlotCreateManyArgs} args - Arguments to create many ReservationTimeSlots.
     * @example
     * // Create many ReservationTimeSlots
     * const reservationTimeSlot = await prisma.reservationTimeSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationTimeSlotCreateManyArgs>(args?: SelectSubset<T, ReservationTimeSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationTimeSlots and returns the data saved in the database.
     * @param {ReservationTimeSlotCreateManyAndReturnArgs} args - Arguments to create many ReservationTimeSlots.
     * @example
     * // Create many ReservationTimeSlots
     * const reservationTimeSlot = await prisma.reservationTimeSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservationTimeSlots and only return the `id`
     * const reservationTimeSlotWithIdOnly = await prisma.reservationTimeSlot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationTimeSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationTimeSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReservationTimeSlot.
     * @param {ReservationTimeSlotDeleteArgs} args - Arguments to delete one ReservationTimeSlot.
     * @example
     * // Delete one ReservationTimeSlot
     * const ReservationTimeSlot = await prisma.reservationTimeSlot.delete({
     *   where: {
     *     // ... filter to delete one ReservationTimeSlot
     *   }
     * })
     * 
     */
    delete<T extends ReservationTimeSlotDeleteArgs>(args: SelectSubset<T, ReservationTimeSlotDeleteArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReservationTimeSlot.
     * @param {ReservationTimeSlotUpdateArgs} args - Arguments to update one ReservationTimeSlot.
     * @example
     * // Update one ReservationTimeSlot
     * const reservationTimeSlot = await prisma.reservationTimeSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationTimeSlotUpdateArgs>(args: SelectSubset<T, ReservationTimeSlotUpdateArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReservationTimeSlots.
     * @param {ReservationTimeSlotDeleteManyArgs} args - Arguments to filter ReservationTimeSlots to delete.
     * @example
     * // Delete a few ReservationTimeSlots
     * const { count } = await prisma.reservationTimeSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationTimeSlotDeleteManyArgs>(args?: SelectSubset<T, ReservationTimeSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationTimeSlots
     * const reservationTimeSlot = await prisma.reservationTimeSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationTimeSlotUpdateManyArgs>(args: SelectSubset<T, ReservationTimeSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationTimeSlot.
     * @param {ReservationTimeSlotUpsertArgs} args - Arguments to update or create a ReservationTimeSlot.
     * @example
     * // Update or create a ReservationTimeSlot
     * const reservationTimeSlot = await prisma.reservationTimeSlot.upsert({
     *   create: {
     *     // ... data to create a ReservationTimeSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationTimeSlot we want to update
     *   }
     * })
     */
    upsert<T extends ReservationTimeSlotUpsertArgs>(args: SelectSubset<T, ReservationTimeSlotUpsertArgs<ExtArgs>>): Prisma__ReservationTimeSlotClient<$Result.GetResult<Prisma.$ReservationTimeSlotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReservationTimeSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotCountArgs} args - Arguments to filter ReservationTimeSlots to count.
     * @example
     * // Count the number of ReservationTimeSlots
     * const count = await prisma.reservationTimeSlot.count({
     *   where: {
     *     // ... the filter for the ReservationTimeSlots we want to count
     *   }
     * })
    **/
    count<T extends ReservationTimeSlotCountArgs>(
      args?: Subset<T, ReservationTimeSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationTimeSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationTimeSlotAggregateArgs>(args: Subset<T, ReservationTimeSlotAggregateArgs>): Prisma.PrismaPromise<GetReservationTimeSlotAggregateType<T>>

    /**
     * Group by ReservationTimeSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTimeSlotGroupByArgs} args - Group by arguments.
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
      T extends ReservationTimeSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationTimeSlotGroupByArgs['orderBy'] }
        : { orderBy?: ReservationTimeSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationTimeSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationTimeSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationTimeSlot model
   */
  readonly fields: ReservationTimeSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationTimeSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationTimeSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReservationTimeSlot model
   */ 
  interface ReservationTimeSlotFieldRefs {
    readonly id: FieldRef<"ReservationTimeSlot", 'String'>
    readonly date: FieldRef<"ReservationTimeSlot", 'DateTime'>
    readonly startTime: FieldRef<"ReservationTimeSlot", 'String'>
    readonly endTime: FieldRef<"ReservationTimeSlot", 'String'>
    readonly reservationId: FieldRef<"ReservationTimeSlot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReservationTimeSlot findUnique
   */
  export type ReservationTimeSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTimeSlot to fetch.
     */
    where: ReservationTimeSlotWhereUniqueInput
  }

  /**
   * ReservationTimeSlot findUniqueOrThrow
   */
  export type ReservationTimeSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTimeSlot to fetch.
     */
    where: ReservationTimeSlotWhereUniqueInput
  }

  /**
   * ReservationTimeSlot findFirst
   */
  export type ReservationTimeSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTimeSlot to fetch.
     */
    where?: ReservationTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTimeSlots to fetch.
     */
    orderBy?: ReservationTimeSlotOrderByWithRelationInput | ReservationTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationTimeSlots.
     */
    cursor?: ReservationTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationTimeSlots.
     */
    distinct?: ReservationTimeSlotScalarFieldEnum | ReservationTimeSlotScalarFieldEnum[]
  }

  /**
   * ReservationTimeSlot findFirstOrThrow
   */
  export type ReservationTimeSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTimeSlot to fetch.
     */
    where?: ReservationTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTimeSlots to fetch.
     */
    orderBy?: ReservationTimeSlotOrderByWithRelationInput | ReservationTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationTimeSlots.
     */
    cursor?: ReservationTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTimeSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationTimeSlots.
     */
    distinct?: ReservationTimeSlotScalarFieldEnum | ReservationTimeSlotScalarFieldEnum[]
  }

  /**
   * ReservationTimeSlot findMany
   */
  export type ReservationTimeSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTimeSlots to fetch.
     */
    where?: ReservationTimeSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTimeSlots to fetch.
     */
    orderBy?: ReservationTimeSlotOrderByWithRelationInput | ReservationTimeSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationTimeSlots.
     */
    cursor?: ReservationTimeSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTimeSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTimeSlots.
     */
    skip?: number
    distinct?: ReservationTimeSlotScalarFieldEnum | ReservationTimeSlotScalarFieldEnum[]
  }

  /**
   * ReservationTimeSlot create
   */
  export type ReservationTimeSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationTimeSlot.
     */
    data: XOR<ReservationTimeSlotCreateInput, ReservationTimeSlotUncheckedCreateInput>
  }

  /**
   * ReservationTimeSlot createMany
   */
  export type ReservationTimeSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationTimeSlots.
     */
    data: ReservationTimeSlotCreateManyInput | ReservationTimeSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationTimeSlot createManyAndReturn
   */
  export type ReservationTimeSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReservationTimeSlots.
     */
    data: ReservationTimeSlotCreateManyInput | ReservationTimeSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationTimeSlot update
   */
  export type ReservationTimeSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationTimeSlot.
     */
    data: XOR<ReservationTimeSlotUpdateInput, ReservationTimeSlotUncheckedUpdateInput>
    /**
     * Choose, which ReservationTimeSlot to update.
     */
    where: ReservationTimeSlotWhereUniqueInput
  }

  /**
   * ReservationTimeSlot updateMany
   */
  export type ReservationTimeSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationTimeSlots.
     */
    data: XOR<ReservationTimeSlotUpdateManyMutationInput, ReservationTimeSlotUncheckedUpdateManyInput>
    /**
     * Filter which ReservationTimeSlots to update
     */
    where?: ReservationTimeSlotWhereInput
    limit?: number
  }

  /**
   * ReservationTimeSlot upsert
   */
  export type ReservationTimeSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationTimeSlot to update in case it exists.
     */
    where: ReservationTimeSlotWhereUniqueInput
    /**
     * In case the ReservationTimeSlot found by the `where` argument doesn't exist, create a new ReservationTimeSlot with this data.
     */
    create: XOR<ReservationTimeSlotCreateInput, ReservationTimeSlotUncheckedCreateInput>
    /**
     * In case the ReservationTimeSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationTimeSlotUpdateInput, ReservationTimeSlotUncheckedUpdateInput>
  }

  /**
   * ReservationTimeSlot delete
   */
  export type ReservationTimeSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
    /**
     * Filter which ReservationTimeSlot to delete.
     */
    where: ReservationTimeSlotWhereUniqueInput
  }

  /**
   * ReservationTimeSlot deleteMany
   */
  export type ReservationTimeSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationTimeSlots to delete
     */
    where?: ReservationTimeSlotWhereInput
    limit?: number
  }

  /**
   * ReservationTimeSlot without action
   */
  export type ReservationTimeSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTimeSlot
     */
    select?: ReservationTimeSlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTimeSlotInclude<ExtArgs> | null
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
    limit?: number
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
    limit?: number
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
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    venueId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    venueId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    venueId: number | null
    reservationId: string | null
    answer: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    venueId: number | null
    reservationId: string | null
    answer: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    venueId: number
    reservationId: number
    answerOptions: number
    answer: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    venueId?: true
  }

  export type QuestionSumAggregateInputType = {
    venueId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    venueId?: true
    reservationId?: true
    answer?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    venueId?: true
    reservationId?: true
    answer?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    venueId?: true
    reservationId?: true
    answerOptions?: true
    answer?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    venueId: number | null
    reservationId: string | null
    answerOptions: string[]
    answer: string | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    venueId?: boolean
    reservationId?: boolean
    answerOptions?: boolean
    answer?: boolean
    venue?: boolean | Question$venueArgs<ExtArgs>
    reservation?: boolean | Question$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    venueId?: boolean
    reservationId?: boolean
    answerOptions?: boolean
    answer?: boolean
    venue?: boolean | Question$venueArgs<ExtArgs>
    reservation?: boolean | Question$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    venueId?: boolean
    reservationId?: boolean
    answerOptions?: boolean
    answer?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | Question$venueArgs<ExtArgs>
    reservation?: boolean | Question$reservationArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | Question$venueArgs<ExtArgs>
    reservation?: boolean | Question$reservationArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs> | null
      reservation: Prisma.$ReservationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      venueId: number | null
      reservationId: string | null
      answerOptions: string[]
      answer: string | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends Question$venueArgs<ExtArgs> = {}>(args?: Subset<T, Question$venueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reservation<T extends Question$reservationArgs<ExtArgs> = {}>(args?: Subset<T, Question$reservationArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly venueId: FieldRef<"Question", 'Int'>
    readonly reservationId: FieldRef<"Question", 'String'>
    readonly answerOptions: FieldRef<"Question", 'String[]'>
    readonly answer: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    limit?: number
  }

  /**
   * Question.venue
   */
  export type Question$venueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
  }

  /**
   * Question.reservation
   */
  export type Question$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
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
    limit?: number
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
    limit?: number
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_token: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_token: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_token: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_token?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_token?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_token?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_token: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_token?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_token: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_token: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
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
    provider: 'provider',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    profilePicture: 'profilePicture'
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
    amenments: 'amenments',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    adminId: 'adminId'
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReservationTimeSlotScalarFieldEnum: {
    id: 'id',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    reservationId: 'reservationId'
  };

  export type ReservationTimeSlotScalarFieldEnum = (typeof ReservationTimeSlotScalarFieldEnum)[keyof typeof ReservationTimeSlotScalarFieldEnum]


  export const ReservationStateScalarFieldEnum: {
    reservationStateId: 'reservationStateId',
    reservationId: 'reservationId',
    status: 'status',
    adminComments: 'adminComments'
  };

  export type ReservationStateScalarFieldEnum = (typeof ReservationStateScalarFieldEnum)[keyof typeof ReservationStateScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    venueId: 'venueId',
    reservationId: 'reservationId',
    answerOptions: 'answerOptions',
    answer: 'answer'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const VenueDailyReservationCountScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    reservationCount: 'reservationCount',
    date: 'date'
  };

  export type VenueDailyReservationCountScalarFieldEnum = (typeof VenueDailyReservationCountScalarFieldEnum)[keyof typeof VenueDailyReservationCountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_token: 'session_token'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


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
    contactNumber?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    provider?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    reservations?: ReservationListRelationFilter
    venues?: VenueListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
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
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    venues?: VenueOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    contactNumber?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    emailVerified?: BoolFilter<"User"> | boolean
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    provider?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    profilePicture?: StringNullableFilter<"User"> | string | null
    reservations?: ReservationListRelationFilter
    venues?: VenueListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
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
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    contactNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
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
    amenments?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    adminId?: StringNullableFilter<"Venue"> | string | null
    availability?: VenueAvailabilityListRelationFilter
    reservations?: ReservationListRelationFilter
    questions?: QuestionListRelationFilter
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
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
    amenments?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrderInput | SortOrder
    availability?: VenueAvailabilityOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    admin?: UserOrderByWithRelationInput
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
    amenments?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    adminId?: StringNullableFilter<"Venue"> | string | null
    availability?: VenueAvailabilityListRelationFilter
    reservations?: ReservationListRelationFilter
    questions?: QuestionListRelationFilter
    admin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
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
    amenments?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrderInput | SortOrder
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
    amenments?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Venue"> | Date | string
    adminId?: StringNullableWithAggregatesFilter<"Venue"> | string | null
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
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
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
    venueId_date?: VenueAvailabilityVenueIdDateCompoundUniqueInput
    AND?: VenueAvailabilityWhereInput | VenueAvailabilityWhereInput[]
    OR?: VenueAvailabilityWhereInput[]
    NOT?: VenueAvailabilityWhereInput | VenueAvailabilityWhereInput[]
    venueId?: IntFilter<"VenueAvailability"> | number
    date?: DateTimeFilter<"VenueAvailability"> | Date | string
    status?: EnumAvailabilityStatusFilter<"VenueAvailability"> | $Enums.AvailabilityStatus
    timeSlots?: TimeSlotListRelationFilter
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id" | "venueId_date">

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
    venueAvailability?: XOR<VenueAvailabilityScalarRelationFilter, VenueAvailabilityWhereInput>
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
    venueAvailability?: XOR<VenueAvailabilityScalarRelationFilter, VenueAvailabilityWhereInput>
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
    extraServices?: StringNullableListFilter<"Reservation">
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    questions?: QuestionListRelationFilter
    timeSlots?: ReservationTimeSlotListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    reservationState?: XOR<ReservationStateNullableScalarRelationFilter, ReservationStateWhereInput> | null
  }

  export type ReservationOrderByWithRelationInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    extraServices?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    timeSlots?: ReservationTimeSlotOrderByRelationAggregateInput
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
    extraServices?: StringNullableListFilter<"Reservation">
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    questions?: QuestionListRelationFilter
    timeSlots?: ReservationTimeSlotListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    reservationState?: XOR<ReservationStateNullableScalarRelationFilter, ReservationStateWhereInput> | null
  }, "reservationId">

  export type ReservationOrderByWithAggregationInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    extraServices?: SortOrder
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
    extraServices?: StringNullableListFilter<"Reservation">
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ReservationTimeSlotWhereInput = {
    AND?: ReservationTimeSlotWhereInput | ReservationTimeSlotWhereInput[]
    OR?: ReservationTimeSlotWhereInput[]
    NOT?: ReservationTimeSlotWhereInput | ReservationTimeSlotWhereInput[]
    id?: StringFilter<"ReservationTimeSlot"> | string
    date?: DateTimeFilter<"ReservationTimeSlot"> | Date | string
    startTime?: StringFilter<"ReservationTimeSlot"> | string
    endTime?: StringFilter<"ReservationTimeSlot"> | string
    reservationId?: StringFilter<"ReservationTimeSlot"> | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type ReservationTimeSlotOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type ReservationTimeSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationTimeSlotWhereInput | ReservationTimeSlotWhereInput[]
    OR?: ReservationTimeSlotWhereInput[]
    NOT?: ReservationTimeSlotWhereInput | ReservationTimeSlotWhereInput[]
    date?: DateTimeFilter<"ReservationTimeSlot"> | Date | string
    startTime?: StringFilter<"ReservationTimeSlot"> | string
    endTime?: StringFilter<"ReservationTimeSlot"> | string
    reservationId?: StringFilter<"ReservationTimeSlot"> | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id">

  export type ReservationTimeSlotOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
    _count?: ReservationTimeSlotCountOrderByAggregateInput
    _max?: ReservationTimeSlotMaxOrderByAggregateInput
    _min?: ReservationTimeSlotMinOrderByAggregateInput
  }

  export type ReservationTimeSlotScalarWhereWithAggregatesInput = {
    AND?: ReservationTimeSlotScalarWhereWithAggregatesInput | ReservationTimeSlotScalarWhereWithAggregatesInput[]
    OR?: ReservationTimeSlotScalarWhereWithAggregatesInput[]
    NOT?: ReservationTimeSlotScalarWhereWithAggregatesInput | ReservationTimeSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservationTimeSlot"> | string
    date?: DateTimeWithAggregatesFilter<"ReservationTimeSlot"> | Date | string
    startTime?: StringWithAggregatesFilter<"ReservationTimeSlot"> | string
    endTime?: StringWithAggregatesFilter<"ReservationTimeSlot"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationTimeSlot"> | string
  }

  export type ReservationStateWhereInput = {
    AND?: ReservationStateWhereInput | ReservationStateWhereInput[]
    OR?: ReservationStateWhereInput[]
    NOT?: ReservationStateWhereInput | ReservationStateWhereInput[]
    reservationStateId?: StringFilter<"ReservationState"> | string
    reservationId?: StringFilter<"ReservationState"> | string
    status?: EnumStatusFilter<"ReservationState"> | $Enums.Status
    adminComments?: StringNullableFilter<"ReservationState"> | string | null
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
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
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
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

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    venueId?: IntNullableFilter<"Question"> | number | null
    reservationId?: StringNullableFilter<"Question"> | string | null
    answerOptions?: StringNullableListFilter<"Question">
    answer?: StringNullableFilter<"Question"> | string | null
    venue?: XOR<VenueNullableScalarRelationFilter, VenueWhereInput> | null
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    venueId?: SortOrderInput | SortOrder
    reservationId?: SortOrderInput | SortOrder
    answerOptions?: SortOrder
    answer?: SortOrderInput | SortOrder
    venue?: VenueOrderByWithRelationInput
    reservation?: ReservationOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    venueId?: IntNullableFilter<"Question"> | number | null
    reservationId?: StringNullableFilter<"Question"> | string | null
    answerOptions?: StringNullableListFilter<"Question">
    answer?: StringNullableFilter<"Question"> | string | null
    venue?: XOR<VenueNullableScalarRelationFilter, VenueWhereInput> | null
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    venueId?: SortOrderInput | SortOrder
    reservationId?: SortOrderInput | SortOrder
    answerOptions?: SortOrder
    answer?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    venueId?: IntNullableWithAggregatesFilter<"Question"> | number | null
    reservationId?: StringNullableWithAggregatesFilter<"Question"> | string | null
    answerOptions?: StringNullableListFilter<"Question">
    answer?: StringNullableWithAggregatesFilter<"Question"> | string | null
  }

  export type VenueDailyReservationCountWhereInput = {
    AND?: VenueDailyReservationCountWhereInput | VenueDailyReservationCountWhereInput[]
    OR?: VenueDailyReservationCountWhereInput[]
    NOT?: VenueDailyReservationCountWhereInput | VenueDailyReservationCountWhereInput[]
    id?: IntFilter<"VenueDailyReservationCount"> | number
    venueId?: IntFilter<"VenueDailyReservationCount"> | number
    reservationCount?: IntFilter<"VenueDailyReservationCount"> | number
    date?: DateTimeFilter<"VenueDailyReservationCount"> | Date | string
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
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
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
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

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_token?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_token?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_token?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_token?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type UserCreateInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationCreateNestedManyWithoutUserInput
    venues?: VenueCreateNestedManyWithoutAdminInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    venues?: VenueUncheckedCreateNestedManyWithoutAdminInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    venues?: VenueUpdateManyWithoutAdminNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    venues?: VenueUncheckedUpdateManyWithoutAdminNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    questions?: QuestionCreateNestedManyWithoutVenueInput
    admin?: UserCreateNestedOneWithoutVenuesInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    questions?: QuestionUncheckedCreateNestedManyWithoutVenueInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    questions?: QuestionUpdateManyWithoutVenueNestedInput
    admin?: UserUpdateOneWithoutVenuesNestedInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutVenueNestedInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
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
    amenments?: VenueUpdateamenmentsInput | string[]
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
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
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotCreateNestedManyWithoutReservationInput
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
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotUncheckedCreateNestedManyWithoutReservationInput
    reservationState?: ReservationStateUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUpdateManyWithoutReservationNestedInput
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
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUncheckedUpdateManyWithoutReservationNestedInput
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    reservationId?: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
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
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTimeSlotCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    reservation: ReservationCreateNestedOneWithoutTimeSlotsInput
  }

  export type ReservationTimeSlotUncheckedCreateInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    reservationId: string
  }

  export type ReservationTimeSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    reservation?: ReservationUpdateOneRequiredWithoutTimeSlotsNestedInput
  }

  export type ReservationTimeSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationTimeSlotCreateManyInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
    reservationId: string
  }

  export type ReservationTimeSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationTimeSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
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

  export type QuestionCreateInput = {
    id?: string
    text: string
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
    venue?: VenueCreateNestedOneWithoutQuestionsInput
    reservation?: ReservationCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    venueId?: number | null
    reservationId?: string | null
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: VenueUpdateOneWithoutQuestionsNestedInput
    reservation?: ReservationUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    venueId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    venueId?: number | null
    reservationId?: string | null
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    venueId?: NullableIntFieldUpdateOperationsInput | number | null
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_token?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_token?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_token?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type VenueListRelationFilter = {
    every?: VenueWhereInput
    some?: VenueWhereInput
    none?: VenueWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
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
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    profilePicture?: SortOrder
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
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    profilePicture?: SortOrder
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
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    profilePicture?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VenueDailyReservationCountListRelationFilter = {
    every?: VenueDailyReservationCountWhereInput
    some?: VenueDailyReservationCountWhereInput
    none?: VenueDailyReservationCountWhereInput
  }

  export type VenueAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
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
    amenments?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adminId?: SortOrder
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
    adminId?: SortOrder
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
    adminId?: SortOrder
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

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type TimeSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VenueAvailabilityVenueIdDateCompoundUniqueInput = {
    venueId: number
    date: Date | string
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

  export type VenueAvailabilityScalarRelationFilter = {
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

  export type ReservationTimeSlotListRelationFilter = {
    every?: ReservationTimeSlotWhereInput
    some?: ReservationTimeSlotWhereInput
    none?: ReservationTimeSlotWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReservationStateNullableScalarRelationFilter = {
    is?: ReservationStateWhereInput | null
    isNot?: ReservationStateWhereInput | null
  }

  export type ReservationTimeSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    reservationId?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    title?: SortOrder
    purposeOfReservation?: SortOrder
    timeDuration?: SortOrder
    extraServices?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    venueId?: SortOrder
    timeDuration?: SortOrder
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type ReservationTimeSlotCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationTimeSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
  }

  export type ReservationTimeSlotMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reservationId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VenueNullableScalarRelationFilter = {
    is?: VenueWhereInput | null
    isNot?: VenueWhereInput | null
  }

  export type ReservationNullableScalarRelationFilter = {
    is?: ReservationWhereInput | null
    isNot?: ReservationWhereInput | null
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    venueId?: SortOrder
    reservationId?: SortOrder
    answerOptions?: SortOrder
    answer?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    venueId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    venueId?: SortOrder
    reservationId?: SortOrder
    answer?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    venueId?: SortOrder
    reservationId?: SortOrder
    answer?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    venueId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_token?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_token?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_token?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type VenueCreateNestedManyWithoutAdminInput = {
    create?: XOR<VenueCreateWithoutAdminInput, VenueUncheckedCreateWithoutAdminInput> | VenueCreateWithoutAdminInput[] | VenueUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutAdminInput | VenueCreateOrConnectWithoutAdminInput[]
    createMany?: VenueCreateManyAdminInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type VenueUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<VenueCreateWithoutAdminInput, VenueUncheckedCreateWithoutAdminInput> | VenueCreateWithoutAdminInput[] | VenueUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutAdminInput | VenueCreateOrConnectWithoutAdminInput[]
    createMany?: VenueCreateManyAdminInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type VenueUpdateManyWithoutAdminNestedInput = {
    create?: XOR<VenueCreateWithoutAdminInput, VenueUncheckedCreateWithoutAdminInput> | VenueCreateWithoutAdminInput[] | VenueUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutAdminInput | VenueCreateOrConnectWithoutAdminInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutAdminInput | VenueUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: VenueCreateManyAdminInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutAdminInput | VenueUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutAdminInput | VenueUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
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

  export type VenueUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<VenueCreateWithoutAdminInput, VenueUncheckedCreateWithoutAdminInput> | VenueCreateWithoutAdminInput[] | VenueUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutAdminInput | VenueCreateOrConnectWithoutAdminInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutAdminInput | VenueUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: VenueCreateManyAdminInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutAdminInput | VenueUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutAdminInput | VenueUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
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

  export type VenueCreateamenmentsInput = {
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

  export type QuestionCreateNestedManyWithoutVenueInput = {
    create?: XOR<QuestionCreateWithoutVenueInput, QuestionUncheckedCreateWithoutVenueInput> | QuestionCreateWithoutVenueInput[] | QuestionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVenueInput | QuestionCreateOrConnectWithoutVenueInput[]
    createMany?: QuestionCreateManyVenueInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutVenuesInput = {
    create?: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVenuesInput
    connect?: UserWhereUniqueInput
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

  export type QuestionUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<QuestionCreateWithoutVenueInput, QuestionUncheckedCreateWithoutVenueInput> | QuestionCreateWithoutVenueInput[] | QuestionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVenueInput | QuestionCreateOrConnectWithoutVenueInput[]
    createMany?: QuestionCreateManyVenueInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
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

  export type VenueUpdateamenmentsInput = {
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

  export type QuestionUpdateManyWithoutVenueNestedInput = {
    create?: XOR<QuestionCreateWithoutVenueInput, QuestionUncheckedCreateWithoutVenueInput> | QuestionCreateWithoutVenueInput[] | QuestionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVenueInput | QuestionCreateOrConnectWithoutVenueInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutVenueInput | QuestionUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: QuestionCreateManyVenueInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutVenueInput | QuestionUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutVenueInput | QuestionUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutVenuesNestedInput = {
    create?: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVenuesInput
    upsert?: UserUpsertWithoutVenuesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVenuesInput, UserUpdateWithoutVenuesInput>, UserUncheckedUpdateWithoutVenuesInput>
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

  export type QuestionUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<QuestionCreateWithoutVenueInput, QuestionUncheckedCreateWithoutVenueInput> | QuestionCreateWithoutVenueInput[] | QuestionUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutVenueInput | QuestionCreateOrConnectWithoutVenueInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutVenueInput | QuestionUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: QuestionCreateManyVenueInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutVenueInput | QuestionUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutVenueInput | QuestionUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
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
    set: string[]
  }

  export type QuestionCreateNestedManyWithoutReservationInput = {
    create?: XOR<QuestionCreateWithoutReservationInput, QuestionUncheckedCreateWithoutReservationInput> | QuestionCreateWithoutReservationInput[] | QuestionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutReservationInput | QuestionCreateOrConnectWithoutReservationInput[]
    createMany?: QuestionCreateManyReservationInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ReservationTimeSlotCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationTimeSlotCreateWithoutReservationInput, ReservationTimeSlotUncheckedCreateWithoutReservationInput> | ReservationTimeSlotCreateWithoutReservationInput[] | ReservationTimeSlotUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTimeSlotCreateOrConnectWithoutReservationInput | ReservationTimeSlotCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationTimeSlotCreateManyReservationInputEnvelope
    connect?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
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

  export type QuestionUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<QuestionCreateWithoutReservationInput, QuestionUncheckedCreateWithoutReservationInput> | QuestionCreateWithoutReservationInput[] | QuestionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutReservationInput | QuestionCreateOrConnectWithoutReservationInput[]
    createMany?: QuestionCreateManyReservationInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ReservationTimeSlotUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationTimeSlotCreateWithoutReservationInput, ReservationTimeSlotUncheckedCreateWithoutReservationInput> | ReservationTimeSlotCreateWithoutReservationInput[] | ReservationTimeSlotUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTimeSlotCreateOrConnectWithoutReservationInput | ReservationTimeSlotCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationTimeSlotCreateManyReservationInputEnvelope
    connect?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
  }

  export type ReservationStateUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<ReservationStateCreateWithoutReservationInput, ReservationStateUncheckedCreateWithoutReservationInput>
    connectOrCreate?: ReservationStateCreateOrConnectWithoutReservationInput
    connect?: ReservationStateWhereUniqueInput
  }

  export type ReservationUpdateextraServicesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type QuestionUpdateManyWithoutReservationNestedInput = {
    create?: XOR<QuestionCreateWithoutReservationInput, QuestionUncheckedCreateWithoutReservationInput> | QuestionCreateWithoutReservationInput[] | QuestionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutReservationInput | QuestionCreateOrConnectWithoutReservationInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutReservationInput | QuestionUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: QuestionCreateManyReservationInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutReservationInput | QuestionUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutReservationInput | QuestionUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ReservationTimeSlotUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationTimeSlotCreateWithoutReservationInput, ReservationTimeSlotUncheckedCreateWithoutReservationInput> | ReservationTimeSlotCreateWithoutReservationInput[] | ReservationTimeSlotUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTimeSlotCreateOrConnectWithoutReservationInput | ReservationTimeSlotCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationTimeSlotUpsertWithWhereUniqueWithoutReservationInput | ReservationTimeSlotUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationTimeSlotCreateManyReservationInputEnvelope
    set?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    disconnect?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    delete?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    connect?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    update?: ReservationTimeSlotUpdateWithWhereUniqueWithoutReservationInput | ReservationTimeSlotUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationTimeSlotUpdateManyWithWhereWithoutReservationInput | ReservationTimeSlotUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationTimeSlotScalarWhereInput | ReservationTimeSlotScalarWhereInput[]
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

  export type QuestionUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<QuestionCreateWithoutReservationInput, QuestionUncheckedCreateWithoutReservationInput> | QuestionCreateWithoutReservationInput[] | QuestionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutReservationInput | QuestionCreateOrConnectWithoutReservationInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutReservationInput | QuestionUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: QuestionCreateManyReservationInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutReservationInput | QuestionUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutReservationInput | QuestionUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ReservationTimeSlotUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationTimeSlotCreateWithoutReservationInput, ReservationTimeSlotUncheckedCreateWithoutReservationInput> | ReservationTimeSlotCreateWithoutReservationInput[] | ReservationTimeSlotUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTimeSlotCreateOrConnectWithoutReservationInput | ReservationTimeSlotCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationTimeSlotUpsertWithWhereUniqueWithoutReservationInput | ReservationTimeSlotUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationTimeSlotCreateManyReservationInputEnvelope
    set?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    disconnect?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    delete?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    connect?: ReservationTimeSlotWhereUniqueInput | ReservationTimeSlotWhereUniqueInput[]
    update?: ReservationTimeSlotUpdateWithWhereUniqueWithoutReservationInput | ReservationTimeSlotUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationTimeSlotUpdateManyWithWhereWithoutReservationInput | ReservationTimeSlotUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationTimeSlotScalarWhereInput | ReservationTimeSlotScalarWhereInput[]
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

  export type ReservationCreateNestedOneWithoutTimeSlotsInput = {
    create?: XOR<ReservationCreateWithoutTimeSlotsInput, ReservationUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutTimeSlotsInput
    connect?: ReservationWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutTimeSlotsNestedInput = {
    create?: XOR<ReservationCreateWithoutTimeSlotsInput, ReservationUncheckedCreateWithoutTimeSlotsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutTimeSlotsInput
    upsert?: ReservationUpsertWithoutTimeSlotsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutTimeSlotsInput, ReservationUpdateWithoutTimeSlotsInput>, ReservationUncheckedUpdateWithoutTimeSlotsInput>
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

  export type QuestionCreateanswerOptionsInput = {
    set: string[]
  }

  export type VenueCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<VenueCreateWithoutQuestionsInput, VenueUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutQuestionsInput
    connect?: VenueWhereUniqueInput
  }

  export type ReservationCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ReservationCreateWithoutQuestionsInput, ReservationUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutQuestionsInput
    connect?: ReservationWhereUniqueInput
  }

  export type QuestionUpdateanswerOptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VenueUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<VenueCreateWithoutQuestionsInput, VenueUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutQuestionsInput
    upsert?: VenueUpsertWithoutQuestionsInput
    disconnect?: VenueWhereInput | boolean
    delete?: VenueWhereInput | boolean
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutQuestionsInput, VenueUpdateWithoutQuestionsInput>, VenueUncheckedUpdateWithoutQuestionsInput>
  }

  export type ReservationUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<ReservationCreateWithoutQuestionsInput, ReservationUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutQuestionsInput
    upsert?: ReservationUpsertWithoutQuestionsInput
    disconnect?: ReservationWhereInput | boolean
    delete?: ReservationWhereInput | boolean
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutQuestionsInput, ReservationUpdateWithoutQuestionsInput>, ReservationUncheckedUpdateWithoutQuestionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ReservationCreateWithoutUserInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotCreateNestedManyWithoutReservationInput
    venue: VenueCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    reservationId?: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotUncheckedCreateNestedManyWithoutReservationInput
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

  export type VenueCreateWithoutAdminInput = {
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    questions?: QuestionCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutAdminInput = {
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    questions?: QuestionUncheckedCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutAdminInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutAdminInput, VenueUncheckedCreateWithoutAdminInput>
  }

  export type VenueCreateManyAdminInputEnvelope = {
    data: VenueCreateManyAdminInput | VenueCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_token?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_token?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
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
    extraServices?: StringNullableListFilter<"Reservation">
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type VenueUpsertWithWhereUniqueWithoutAdminInput = {
    where: VenueWhereUniqueInput
    update: XOR<VenueUpdateWithoutAdminInput, VenueUncheckedUpdateWithoutAdminInput>
    create: XOR<VenueCreateWithoutAdminInput, VenueUncheckedCreateWithoutAdminInput>
  }

  export type VenueUpdateWithWhereUniqueWithoutAdminInput = {
    where: VenueWhereUniqueInput
    data: XOR<VenueUpdateWithoutAdminInput, VenueUncheckedUpdateWithoutAdminInput>
  }

  export type VenueUpdateManyWithWhereWithoutAdminInput = {
    where: VenueScalarWhereInput
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyWithoutAdminInput>
  }

  export type VenueScalarWhereInput = {
    AND?: VenueScalarWhereInput | VenueScalarWhereInput[]
    OR?: VenueScalarWhereInput[]
    NOT?: VenueScalarWhereInput | VenueScalarWhereInput[]
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
    amenments?: StringNullableListFilter<"Venue">
    images?: StringNullableListFilter<"Venue">
    createdAt?: DateTimeFilter<"Venue"> | Date | string
    updatedAt?: DateTimeFilter<"Venue"> | Date | string
    adminId?: StringNullableFilter<"Venue"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_token?: StringNullableFilter<"Account"> | string | null
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
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotCreateNestedManyWithoutReservationInput
    user: UserCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutVenueInput = {
    reservationId?: string
    userId: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotUncheckedCreateNestedManyWithoutReservationInput
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

  export type QuestionCreateWithoutVenueInput = {
    id?: string
    text: string
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
    reservation?: ReservationCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutVenueInput = {
    id?: string
    text: string
    reservationId?: string | null
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
  }

  export type QuestionCreateOrConnectWithoutVenueInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutVenueInput, QuestionUncheckedCreateWithoutVenueInput>
  }

  export type QuestionCreateManyVenueInputEnvelope = {
    data: QuestionCreateManyVenueInput | QuestionCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutVenuesInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVenuesInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVenuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
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

  export type QuestionUpsertWithWhereUniqueWithoutVenueInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutVenueInput, QuestionUncheckedUpdateWithoutVenueInput>
    create: XOR<QuestionCreateWithoutVenueInput, QuestionUncheckedCreateWithoutVenueInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutVenueInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutVenueInput, QuestionUncheckedUpdateWithoutVenueInput>
  }

  export type QuestionUpdateManyWithWhereWithoutVenueInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutVenueInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    venueId?: IntNullableFilter<"Question"> | number | null
    reservationId?: StringNullableFilter<"Question"> | string | null
    answerOptions?: StringNullableListFilter<"Question">
    answer?: StringNullableFilter<"Question"> | string | null
  }

  export type UserUpsertWithoutVenuesInput = {
    update: XOR<UserUpdateWithoutVenuesInput, UserUncheckedUpdateWithoutVenuesInput>
    create: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVenuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVenuesInput, UserUncheckedUpdateWithoutVenuesInput>
  }

  export type UserUpdateWithoutVenuesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVenuesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    questions?: QuestionCreateNestedManyWithoutVenueInput
    admin?: UserCreateNestedOneWithoutVenuesInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    questions?: QuestionUncheckedCreateNestedManyWithoutVenueInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    questions?: QuestionUpdateManyWithoutVenueNestedInput
    admin?: UserUpdateOneWithoutVenuesNestedInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutVenueNestedInput
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

  export type QuestionCreateWithoutReservationInput = {
    id?: string
    text: string
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
    venue?: VenueCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutReservationInput = {
    id?: string
    text: string
    venueId?: number | null
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
  }

  export type QuestionCreateOrConnectWithoutReservationInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutReservationInput, QuestionUncheckedCreateWithoutReservationInput>
  }

  export type QuestionCreateManyReservationInputEnvelope = {
    data: QuestionCreateManyReservationInput | QuestionCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type ReservationTimeSlotCreateWithoutReservationInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
  }

  export type ReservationTimeSlotUncheckedCreateWithoutReservationInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
  }

  export type ReservationTimeSlotCreateOrConnectWithoutReservationInput = {
    where: ReservationTimeSlotWhereUniqueInput
    create: XOR<ReservationTimeSlotCreateWithoutReservationInput, ReservationTimeSlotUncheckedCreateWithoutReservationInput>
  }

  export type ReservationTimeSlotCreateManyReservationInputEnvelope = {
    data: ReservationTimeSlotCreateManyReservationInput | ReservationTimeSlotCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutReservationsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    venues?: VenueCreateNestedManyWithoutAdminInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    venues?: VenueUncheckedCreateNestedManyWithoutAdminInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    questions?: QuestionCreateNestedManyWithoutVenueInput
    admin?: UserCreateNestedOneWithoutVenuesInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    questions?: QuestionUncheckedCreateNestedManyWithoutVenueInput
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

  export type QuestionUpsertWithWhereUniqueWithoutReservationInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutReservationInput, QuestionUncheckedUpdateWithoutReservationInput>
    create: XOR<QuestionCreateWithoutReservationInput, QuestionUncheckedCreateWithoutReservationInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutReservationInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutReservationInput, QuestionUncheckedUpdateWithoutReservationInput>
  }

  export type QuestionUpdateManyWithWhereWithoutReservationInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationTimeSlotUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationTimeSlotWhereUniqueInput
    update: XOR<ReservationTimeSlotUpdateWithoutReservationInput, ReservationTimeSlotUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationTimeSlotCreateWithoutReservationInput, ReservationTimeSlotUncheckedCreateWithoutReservationInput>
  }

  export type ReservationTimeSlotUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationTimeSlotWhereUniqueInput
    data: XOR<ReservationTimeSlotUpdateWithoutReservationInput, ReservationTimeSlotUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationTimeSlotUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationTimeSlotScalarWhereInput
    data: XOR<ReservationTimeSlotUpdateManyMutationInput, ReservationTimeSlotUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationTimeSlotScalarWhereInput = {
    AND?: ReservationTimeSlotScalarWhereInput | ReservationTimeSlotScalarWhereInput[]
    OR?: ReservationTimeSlotScalarWhereInput[]
    NOT?: ReservationTimeSlotScalarWhereInput | ReservationTimeSlotScalarWhereInput[]
    id?: StringFilter<"ReservationTimeSlot"> | string
    date?: DateTimeFilter<"ReservationTimeSlot"> | Date | string
    startTime?: StringFilter<"ReservationTimeSlot"> | string
    endTime?: StringFilter<"ReservationTimeSlot"> | string
    reservationId?: StringFilter<"ReservationTimeSlot"> | string
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
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    venues?: VenueUpdateManyWithoutAdminNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    venues?: VenueUncheckedUpdateManyWithoutAdminNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    questions?: QuestionUpdateManyWithoutVenueNestedInput
    admin?: UserUpdateOneWithoutVenuesNestedInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutVenueNestedInput
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

  export type ReservationCreateWithoutTimeSlotsInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutReservationInput
    user: UserCreateNestedOneWithoutReservationsInput
    venue: VenueCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutTimeSlotsInput = {
    reservationId?: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutReservationInput
    reservationState?: ReservationStateUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutTimeSlotsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTimeSlotsInput, ReservationUncheckedCreateWithoutTimeSlotsInput>
  }

  export type ReservationUpsertWithoutTimeSlotsInput = {
    update: XOR<ReservationUpdateWithoutTimeSlotsInput, ReservationUncheckedUpdateWithoutTimeSlotsInput>
    create: XOR<ReservationCreateWithoutTimeSlotsInput, ReservationUncheckedCreateWithoutTimeSlotsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutTimeSlotsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutTimeSlotsInput, ReservationUncheckedUpdateWithoutTimeSlotsInput>
  }

  export type ReservationUpdateWithoutTimeSlotsInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutReservationNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutTimeSlotsInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutReservationNestedInput
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateWithoutReservationStateInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotCreateNestedManyWithoutReservationInput
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
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutReservationInput
    timeSlots?: ReservationTimeSlotUncheckedCreateNestedManyWithoutReservationInput
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
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUpdateManyWithoutReservationNestedInput
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
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type VenueCreateWithoutQuestionsInput = {
    name: string
    street_name?: VenueCreatestreet_nameInput | string[]
    district: string
    province: string
    type: string
    capacity: number
    size: number
    schedule: $Enums.Schedule
    features?: VenueCreatefeaturesInput | string[]
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    admin?: UserCreateNestedOneWithoutVenuesInput
    dailyReservationCounts?: VenueDailyReservationCountCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutQuestionsInput = {
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutQuestionsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutQuestionsInput, VenueUncheckedCreateWithoutQuestionsInput>
  }

  export type ReservationCreateWithoutQuestionsInput = {
    reservationId?: string
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSlots?: ReservationTimeSlotCreateNestedManyWithoutReservationInput
    user: UserCreateNestedOneWithoutReservationsInput
    venue: VenueCreateNestedOneWithoutReservationsInput
    reservationState?: ReservationStateCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutQuestionsInput = {
    reservationId?: string
    userId: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    timeSlots?: ReservationTimeSlotUncheckedCreateNestedManyWithoutReservationInput
    reservationState?: ReservationStateUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutQuestionsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutQuestionsInput, ReservationUncheckedCreateWithoutQuestionsInput>
  }

  export type VenueUpsertWithoutQuestionsInput = {
    update: XOR<VenueUpdateWithoutQuestionsInput, VenueUncheckedUpdateWithoutQuestionsInput>
    create: XOR<VenueCreateWithoutQuestionsInput, VenueUncheckedCreateWithoutQuestionsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutQuestionsInput, VenueUncheckedUpdateWithoutQuestionsInput>
  }

  export type VenueUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    admin?: UserUpdateOneWithoutVenuesNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutQuestionsInput = {
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type ReservationUpsertWithoutQuestionsInput = {
    update: XOR<ReservationUpdateWithoutQuestionsInput, ReservationUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ReservationCreateWithoutQuestionsInput, ReservationUncheckedCreateWithoutQuestionsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutQuestionsInput, ReservationUncheckedUpdateWithoutQuestionsInput>
  }

  export type ReservationUpdateWithoutQuestionsInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: ReservationTimeSlotUpdateManyWithoutReservationNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutQuestionsInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlots?: ReservationTimeSlotUncheckedUpdateManyWithoutReservationNestedInput
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VenueAvailabilityCreateNestedManyWithoutVenueInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    questions?: QuestionCreateNestedManyWithoutVenueInput
    admin?: UserCreateNestedOneWithoutVenuesInput
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    adminId?: string | null
    availability?: VenueAvailabilityUncheckedCreateNestedManyWithoutVenueInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    questions?: QuestionUncheckedCreateNestedManyWithoutVenueInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    questions?: QuestionUpdateManyWithoutVenueNestedInput
    admin?: UserUpdateOneWithoutVenuesNestedInput
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationCreateNestedManyWithoutUserInput
    venues?: VenueCreateNestedManyWithoutAdminInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    venues?: VenueUncheckedCreateNestedManyWithoutAdminInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    venues?: VenueUpdateManyWithoutAdminNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    venues?: VenueUncheckedUpdateManyWithoutAdminNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationCreateNestedManyWithoutUserInput
    venues?: VenueCreateNestedManyWithoutAdminInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    userId?: string
    firstName: string
    lastName?: string | null
    contactNumber?: string | null
    address?: string | null
    email: string
    emailVerified?: boolean
    password?: string | null
    userType: $Enums.UserType
    provider?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    profilePicture?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    venues?: VenueUncheckedCreateNestedManyWithoutAdminInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    venues?: VenueUpdateManyWithoutAdminNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    venues?: VenueUncheckedUpdateManyWithoutAdminNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationCreateManyUserInput = {
    reservationId?: string
    venueId: number
    title: string
    purposeOfReservation: string
    timeDuration: number
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenueCreateManyAdminInput = {
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
    amenments?: VenueCreateamenmentsInput | string[]
    images?: VenueCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_token?: string | null
  }

  export type ReservationUpdateWithoutUserInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUpdateManyWithoutReservationNestedInput
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUncheckedUpdateManyWithoutReservationNestedInput
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    venueId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    street_name?: VenueUpdatestreet_nameInput | string[]
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    schedule?: EnumScheduleFieldUpdateOperationsInput | $Enums.Schedule
    features?: VenueUpdatefeaturesInput | string[]
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    questions?: QuestionUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutAdminInput = {
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VenueAvailabilityUncheckedUpdateManyWithoutVenueNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutVenueNestedInput
    dailyReservationCounts?: VenueDailyReservationCountUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateManyWithoutAdminInput = {
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
    amenments?: VenueUpdateamenmentsInput | string[]
    images?: VenueUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
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
    extraServices?: ReservationCreateextraServicesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateManyVenueInput = {
    id?: string
    text: string
    reservationId?: string | null
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
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
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUpdateManyWithoutReservationNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    reservationState?: ReservationStateUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVenueInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutReservationNestedInput
    timeSlots?: ReservationTimeSlotUncheckedUpdateManyWithoutReservationNestedInput
    reservationState?: ReservationStateUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutVenueInput = {
    reservationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    purposeOfReservation?: StringFieldUpdateOperationsInput | string
    timeDuration?: IntFieldUpdateOperationsInput | number
    extraServices?: ReservationUpdateextraServicesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyWithoutVenueInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type QuestionCreateManyReservationInput = {
    id?: string
    text: string
    venueId?: number | null
    answerOptions?: QuestionCreateanswerOptionsInput | string[]
    answer?: string | null
  }

  export type ReservationTimeSlotCreateManyReservationInput = {
    id?: string
    date: Date | string
    startTime: string
    endTime: string
  }

  export type QuestionUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: VenueUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    venueId?: NullableIntFieldUpdateOperationsInput | number | null
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    venueId?: NullableIntFieldUpdateOperationsInput | number | null
    answerOptions?: QuestionUpdateanswerOptionsInput | string[]
    answer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationTimeSlotUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationTimeSlotUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationTimeSlotUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
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
     * @deprecated Use ReservationCountOutputTypeDefaultArgs instead
     */
    export type ReservationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use ReservationTimeSlotDefaultArgs instead
     */
    export type ReservationTimeSlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationTimeSlotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationStateDefaultArgs instead
     */
    export type ReservationStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationStateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VenueDailyReservationCountDefaultArgs instead
     */
    export type VenueDailyReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VenueDailyReservationCountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>

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