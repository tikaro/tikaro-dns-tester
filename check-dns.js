const { Resolver } = require('dns').promises;
const resolver = new Resolver();
resolver.setServers(['8.8.8.8']);

export const checkARecord = (domain) => {
  return resolver.resolve4(domain)
}

export const checkAAAARecord = (domain) => {
  return resolver.resolve6(domain)
}

export const checkCname = (domain) => {
  return resolver.resolveCname(domain)
}

export const checkMx = (domain) => {
  return resolver.resolveMx(domain)
}

export const checkNs = (domain) => {
  return resolver.resolveNs(domain)
}

export const checkTxt = (domain) => {
  return resolver.resolveTxt(domain)
}