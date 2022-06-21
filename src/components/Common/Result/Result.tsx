import { ResultPropsI } from "components/Common/Result/result.types";
import { Card } from "components";

function Result({ numberOfCorrectAnswers, numberOfAnswers }: ResultPropsI) {
  return (
    <Card>
      {numberOfCorrectAnswers} / {numberOfAnswers}
    </Card>
  );
}

export default Result;
