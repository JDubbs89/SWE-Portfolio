import SlideUpElement from "@components/containers/default/slideUpElement";

type quoteProps = {
  quote?: string;
};

export default function QuoteContainer(
  { quote = "Hello" }: quoteProps
){
  return (
    <SlideUpElement className="flex justify-center mx-5">
      <div className="page-title mx-auto">
        {quote}
      </div>
    </SlideUpElement>
  )
}