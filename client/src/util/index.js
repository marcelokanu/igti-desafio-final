import { format, parse } from "date-fns";

const moneyFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatMoney(value) {
  return moneyFormatter.format(value);
}

function formatMoneyPositiveNegative(value) {
  const money = moneyFormatter.format(value);

  if (value >= 0) {
    return `+${money}`;
  }

  return money;
}

function formatPercent(value) {
  if (!value) {
    return "";
  }
  return value.toFixed(2).replace(".", ",") + "%";
}

function parseAndFormatDate(dateInput, formatDateOutput) {
  const dateParsed = parse(dateInput, "yyyy-MM-dd", new Date());
  return format(dateParsed, formatDateOutput, new Date());
}

function currentMonthYear() {
  return format(new Date(), "yyyy-MM", new Date());
}

function sumValues(obj) {
  return obj.reduce((sum, trans) => {
    return sum + Number(trans.value);
  }, 0);
}

const groupArray = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

function findIcon(category) {
  switch (category) {
    case "Lazer":
      return "mood";
    case "Mercado":
      return "shopping_basket";
    case "Receita":
      return "attach_money";
    case "Saúde":
      return "healing";
    case "Transporte":
      return "directions_car";
    default:
      return "beenhere";
  }
}

export {
  formatMoney,
  formatPercent,
  formatMoneyPositiveNegative,
  currentMonthYear,
  parseAndFormatDate,
  groupArray,
  sumValues,
  findIcon,
};
