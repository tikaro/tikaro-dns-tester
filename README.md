# Tikaro DNS Checker

This is a set of Jest tests for making sure that all domain records are present and accounted for.

## How it Works

This script uses Node's DNS lookup functions:
https://nodejs.org/api/dns.html

...looks up the records, and matches them to expected output.

This script doesn't do anything _technologically_ exciting. What it does is makes it much easer to get through the interminable "is it propagated yet?" phase.

It also provides regression testing that you can run _before_ messing with DNS records.

## How to use it

In general, you'll use this repository to verify that you have correctly added a domain record to a zone file, and that you haven't broken anything.

1. First, run tests to verify that there are no failures.
2. Next, look for the test file matching the domain you are going to change
3. Then, Add the new DNS record to the test (copy and paste a similar test. Refer to `EXAMPLES.md` for some samples.)
4. Run tests and verify that the new record _fails_
5. Make the actual DNS changes
6. Run tests again until the failing test now passes.

You may need to wait up to a day for DNS changes to propagate, so you may need to re-run tests every so often.

### Checking propagation progress

Here's a useful tool for checking the progress of DNS propagation. To check the propagation of an A record on `example.com`, try: https://www.whatsmydns.net/#A/example.com

### To run tests

1. Clone this repository
2. Install: run `yarn` or `npm install`
3. Test: run `yarn test` or `yarn test`