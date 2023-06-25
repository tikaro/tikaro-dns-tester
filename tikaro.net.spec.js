import { checkCname, checkMx, checkNs, checkTxt } from './check-dns';

describe('tikaro.net', () => {

  // NS records
  test('tikaro.net has expected NS records', () => {
    return checkNs('tikaro.net').then(nsrecords => {
      expect(nsrecords).toContain('ns-cloud-e1.googledomains.com');
      expect(nsrecords).toContain('ns-cloud-e2.googledomains.com');
      expect(nsrecords).toContain('ns-cloud-e3.googledomains.com');
      expect(nsrecords).toContain('ns-cloud-e4.googledomains.com');
    });
  });

  // CNAME records
  test('calendar.tikaro.net is CNAMEd to ghs.googlehosted.com', () => {
    return checkCname('calendar.tikaro.net').then(cname => {
      expect(cname[0]).toBe('ghs.googlehosted.com');
    });
  });

  test('www.tikaro.net is CNAMEd to tikaro.github.io', () => {
    return checkCname('www.tikaro.net').then(cname => {
      expect(cname[0]).toBe('tikaro.github.io');
    });
  });

  test('mail.tikaro.net is CNAMEd to ghs.googlehosted.com', () => {
    return checkCname('mail.tikaro.net').then(cname => {
      expect(cname[0]).toBe('ghs.googlehosted.com');
    });
  });

  test('docs.tikaro.net is CNAMEd to ghs.googlehosted.com', () => {
    return checkCname('docs.tikaro.net').then(cname => {
      expect(cname[0]).toBe('ghs.googlehosted.com');
    });
  });

  // MX records
  test('tikaro.net MX contains correct MX records', () => {
    return checkMx('tikaro.net').then(mx => {
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
            exchange: 'alt3.aspmx.l.google.com'
          })
        ])
      )
      expect(mx).toEqual (
        expect.arrayContaining([
          expect.objectContaining({
            exchange: 'alt4.aspmx.l.google.com'
          })
        ])
      )
    });
  });

  // TXT records

  test('tikaro.net has expected TXT records', () => {
    return checkTxt('tikaro.net').then(txtrecords => {
      expect(txtrecords).toEqual (
        expect.arrayContaining([
          expect.arrayContaining([
            "keybase-site-verification=coXw1p88Cgra02T5x6vZKZSobpsa3-K_oz0PKEizRoM"
          ])
        ])
      );
    }
    );
  });

  test('google._domainkey.tikaro.net has expected TXT records', () => {
    return checkTxt('google._domainkey.tikaro.net').then(txtrecords => {
      expect(txtrecords).toEqual (
        expect.arrayContaining([
          expect.arrayContaining([
            "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZxqSCaLpDsjsoTvRtoBQ3KvbBgo+ObPRSmDF1xpJU1meumU8EwkFYRIINXM0phe5rpVS4zucnKyxjhR/yFxRM2vZgJ0oyyCxqt8OuPu7GHxQ/gbRLhbpE9KG1C+rgkGLJS+jJTXyQ+ZnqtBe9gyiIBvQo5E+9InNkDVO8ukOv/wIDAQAB"
          ])
        ])
      );
    }
    );
  });

});
