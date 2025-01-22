import sockMerchant from './index'

const testCases = [
  {
    ar: [10, 20, 20, 10, 10, 30, 50, 10, 20],
    expected: 3,
  },
  {
    ar: [1, 1, 3, 1, 2, 1, 3, 3, 3, 3],
    expected: 4,
  },
]

describe('test sockMerchant', () => {
  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for [${testCase.ar.join(', ')}]`, () => {
      expect(sockMerchant(testCase.ar.length, testCase.ar)).toEqual(testCase.expected)
    })
  })	
})
