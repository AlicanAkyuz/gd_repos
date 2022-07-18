/*
  This is a custom logger that currently only logs to console. 
  In a real life scenario, it'd log to a monitoring service such as Sentry.
*/

export const errorLogger = (
  error: Error,
  info?: { componentStack?: string }
) => {
  console.error({ error, info })
}
