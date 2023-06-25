import { checkCname, checkMx, checkNs, checkTxt } from './check-dns';

describe('tikaro.com', () => {

  // NS records
  test('tikaro.com has expected NS records', () => {
    return checkNs('tikaro.com').then(nsrecords => {
      expect(nsrecords).toContain('ns1.wordpress.com');
      expect(nsrecords).toContain('ns2.wordpress.com');
      expect(nsrecords).toContain('ns3.wordpress.com');
    });
  });

  // CNAME records
  test('projects.tikaro.com is CNAMEd to c.storage.googleapis.com', () => {
    return checkCname('projects.tikaro.com').then(cname => {
      expect(cname[0]).toBe('c.storage.googleapis.com');
    });
  });

  // MX records
  test('tikaro.com MX contains correct MX records', () => {
    return checkMx('tikaro.com').then(mx => {
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'alt1.aspmx.l.google.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'alt2.aspmx.l.google.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'aspmx.l.google.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'aspmx2.googlemail.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'aspmx3.googlemail.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'aspmx4.googlemail.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'aspmx5.googlemail.com'
          })
        ])
      )
    });
  });

  // TXT records

  test('tikaro.com has expected TXT records', () => {
    return checkTxt('tikaro.com').then(txtrecords => {
      expect(txtrecords).toEqual (
        expect.arrayContaining([
          expect.arrayContaining([
            "google-site-verification=8umwlMYP2ucBLFg_Nm47-zWE2XVzT7wTIWXKK3XazKk"
          ])
        ])
      );
    }
    );
  });

  test('_keybase.tikaro.com has expected TXT records', () => {
    return checkTxt('_keybase.tikaro.com').then(txtrecords => {
      expect(txtrecords).toEqual (
        expect.arrayContaining([
          expect.arrayContaining([
            "keybase-site-verification=eCn62YFVW54dBhQEgV0P1ZBNB7eua56oyOzOErQnG0A"
          ])
        ])
      );
    }
    );
  });

});
