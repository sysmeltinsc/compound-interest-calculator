
/**
 * 複利計算ロジック
 * @param {number} initialParams.initialAmount 初期金額
 * @param {number} initialParams.annualContribution 年間積立額
 * @param {number} initialParams.interestRate 年利 (%)
 * @param {number} initialParams.years 期間 (年)
 * @returns {Array} 各年の計算結果オブジェクトの配列
 */
export const calculateCompoundInterest = ({ initialAmount, annualContribution, interestRate, years }) => {
  const results = [];
  let currentPrincipal = initialAmount;
  let currentTotalValue = initialAmount;
  let totalInterest = 0;

  // 0年目（初期状態）
  results.push({
    year: 0,
    principal: currentPrincipal,
    totalValue: currentTotalValue,
    profit: 0,
    rate: 0,
  });

  for (let i = 1; i <= years; i++) {
    // 年初の積立（期首積立と仮定するか、期末か。
    // 一般的な積立投資シミュレーションでは月次積立が多いが、ここは年単位。
    // シンプルに「期末に利子がつき、新たな積立は翌期首または期末」だが、
    // ここでは「期首に積立 -> 1年間運用 -> 利子つく」とするのが一般的（積立NISAなどのシミュレーション）。
    // あるいは「1年かけて積み立てた」として利子は半分だけつく等の厳密計算もあるが、
    // 要件がシンプルなので「期首一括積立」または「期末一括」のどちらか。
    // 実装計画では: "Loop年数分: 元本 = 前年元本 + 積立額, 利子 = (前年評価額 + 積立額) * 金利..."
    // これは期首積立（積立分もその年の金利対象）の計算式。これを採用する。
    
    // 期首積立
    currentPrincipal += annualContribution;
    const valueBeforeInterest = currentTotalValue + annualContribution;
    
    // 利子計算
    const interest = valueBeforeInterest * (interestRate / 100);
    totalInterest += interest;
    
    // 期末評価額
    currentTotalValue = valueBeforeInterest + interest;
    
    // 利益
    const profit = currentTotalValue - currentPrincipal;
    
    // 運用利率 (利益 / 元本)
    const rate = currentPrincipal > 0 ? (profit / currentPrincipal) * 100 : 0;

    results.push({
      year: i,
      principal: Math.round(currentPrincipal),
      totalValue: Math.round(currentTotalValue),
      profit: Math.round(profit),
      rate: parseFloat(rate.toFixed(2)),
    });
  }

  return results;
};
