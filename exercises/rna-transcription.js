const nuc = { G: 'C', C: 'G', T: 'A', A: 'U' };

export const toRna = (strand) => [...strand].map(s => nuc[s]).join('');
