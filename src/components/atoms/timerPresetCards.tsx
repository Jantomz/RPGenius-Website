export default function Preset(props: any) {
  return (
    <div className="bg-veryLight m-12 rounded-xl p-2 text-2xl">
      <div className="bg-midDarkGreen text-veryLight rounded-md p-8">
        <p>{props.breakLength}</p>
        <p>{props.workLength}</p>
      </div>
      <p className="bg-midDarkGreen text-veryLight mt-2 rounded-md p-2 text-center">
        {props.title}
      </p>
    </div>
  );
}
