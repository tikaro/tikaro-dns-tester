# Example tests

Here are some sample records to copy from.

## Example A record test
```
import { checkARecord } from './check-dns';

test('example.com A record resolves to 123.456.789.0', () => {
    return checkARecord('example.com').then(arecord => {
      expect(arecord[0]).toBe('123.456.789.0');
    });
  });
```

## Example CNAME record test
```
import { checkCname } from './check-dns';

  test('calendar.example.com is CNAMEd to foo.example.org', () => {
    return checkCname('calendar.example.com').then(cname => {
      expect(cname[0]).toBe('foo.example.org');
    });
  });
```

## Example NS record test
```
import { checkNs } from './check-dns';

  // NS records
  test('example.com has expected NS records', () => {
    return checkNs('tikaro.net').then(nsrecords => {
      expect(nsrecords).toContain('bar1.example.org');
      expect(nsrecords).toContain('bar2.example.org');
      expect(nsrecords).toContain('bar3.example.org');
      expect(nsrecords).toContain('bar4.example.org');
    });
  });
```

## Example TXT record test
```
import { checkTxt } from './check-dns';

test('example.com has expected TXT records', () => {
    return checkTxt('example.com').then(txtrecords => {
    expect(txtrecords).toEqual (
        expect.arrayContaining([
        expect.arrayContaining([
            "v=spf1 include:_spf.example.com -all"
        ])
        ])
    );
    expect(txtrecords).toEqual (
        expect.arrayContaining([
        expect.arrayContaining([
            "example-vendor-domain-verification=abc123XYZ"
        ])
        ])
    );
    })
});
```

## Example AAAA record test
```
import { checkAAAARecord } from './check-dns';

test('example.com AAAA record contains expected values', () => {
return checkAAAARecord('example.com').then(aaaarecords => {
    expect(aaaarecords).toContain('1234:56a:7000::8');
    expect(aaaarecords).toContain('1234:56a:7001::8');
});
});
```
