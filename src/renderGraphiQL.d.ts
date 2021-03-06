import { ExecutionResult } from 'graphql';

export interface GraphiQLData {
  query?: string | null;
  variables?: { readonly [name: string]: unknown } | null;
  operationName?: string | null;
  result?: ExecutionResult;
}

export interface GraphiQLOptions {
  /**
   * An optional GraphQL string to use when no query is provided and no stored
   * query exists from a previous session.  If undefined is provided, GraphiQL
   * will use its own default query.
   */
  defaultQuery?: string;
}

/**
 * When express-graphql receives a request which does not Accept JSON, but does
 * Accept HTML, it may present GraphiQL, the in-browser GraphQL explorer IDE.
 *
 * When shown, it will be pre-populated with the result of having executed the
 * requested query.
 */
export function renderGraphiQL(
  data: GraphiQLData,
  options?: GraphiQLOptions,
): string;
