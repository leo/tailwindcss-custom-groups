const getError = (message) => {
  return `\`tailwindcss-custom-groups\` requires ${message}.`;
};

const defaultVariants = {
  first: "first-child",
  last: "last-child",
  hover: "hover",
  "focus-visible": "focus-visible",
};

module.exports = plugin(({ addVariant, theme }) => {
  const config = theme("customGroups");

  if (!config) {
    throw new Error(
      getError("`theme.customGroups` in your TailwindCSS config")
    );
  }

  const { names, variants = defaultVariants } = config;

  if (!names || names.length === 0) {
    throw new Error(
      getError("`theme.customGroups.names` to contain group names")
    );
  }

  if (typeof variants !== "object") {
    throw new Error(
      getError("`theme.customGroups.variants` to be key-value pairs")
    );
  }

  names.forEach((group) => {
    for (const variant in variants) {
      const pseudoClass = variants[variant];

      addVariant(`group-${group}-${variant}`, () => {
        return `:merge(.group-${group}):${pseudoClass} &`;
      });
    }
  });
});
