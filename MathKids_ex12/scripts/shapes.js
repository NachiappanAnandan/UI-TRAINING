const shapes = {
    circle: {
      name: "CIRCLE",
      heading: "Radius",
      calculation: [
        {
          name: "RADIUS",
          formula: "r",
          calculate: function (value) {
            return value + " cm";
          },
        },
        {
          name: "AREA",
          formula: "π*r*r",
          calculate: function (value) {
            return (3.14 * value * value).toFixed(2) + "sq cm";
          },
        },
        {
          name: "PERIMETER",
          formula: "2*π*r",
          calculate: function (value) {
            return (2 * 3.14 * value).toFixed(2) + " cm";
          },
        },
      ],
    },
    triangle: {
      name: "EQUILATERAL TRIANGLE ",
      heading: "Side (Base & Height)",
      calculation: [
        {
          name: "SIDE",
          formula: "s",
          calculate: function (value) {
            return value + " cm";
          },
        },
        {
          name: "AREA",
          formula: "0.433*s*s",
          calculate: function (value) {
            return (0.433 * value * value).toFixed(2) + " cm";
          },
        },
        {
          name: "PERIMETER",
          formula: "3 * s",
          calculate: function (value) {
            return (3 * value).toFixed(2) + " cm";
          },
        },
      ],
    },
    square: {
      name: "SQUARE",
      heading: "Side",
      calculation: [
        {
          name: "SIDE",
          formula: "s",
          calculate: function (value) {
            return value + " cm";
          },
        },
        {
          name: "AREA",
          formula: "s*s",
          calculate: function (value) {
            return (value * value).toFixed(2) + " cm";
          },
        },
        {
          name: "PERIMETER",
          formula: "4 * s",
          calculate: function (value) {
            return (4 * value).toFixed(2) + " cm";
          },
        },
      ],
    },
  };

  
  export default shapes;