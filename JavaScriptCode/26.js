// [1, [2, [3], [4, [[[5]]]]]] => [1, 2, 3, 4, 5]

const flatternArray = (arr) => {
    return arr.flatMap(x => {
      if (Array.isArray(x)) {
        return flatternArray(x)
      } else {
        return x;
      }
    })
  }

  console.log(flatternArray([1, [2, [3], [4, [[[5]]]]]]))