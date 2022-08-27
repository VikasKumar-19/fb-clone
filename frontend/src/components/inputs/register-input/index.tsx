import { ClassAttributes, FC, InputHTMLAttributes } from "react";
import { useField, FieldHookConfig, ErrorMessage } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, ClassAttributes<HTMLInputElement> {
  bottom?: boolean;
}

type IProps = InputProps &
  FieldHookConfig<string>;

const RegisterInput: FC<IProps> = ({bottom, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-80 flex relative flex-col items-center">
      {meta.touched && meta.error && !bottom && (
        <div className="relative py-3 px-2 bg-[#e84118] w-full text-[white] text-sm rounded mb-3 md:absolute md:w-80 md:-left-[21rem] md:top-[2.2px]">
          {<ErrorMessage name={field.name} />}
          <div className="absolute bottom-0 translate-y-full border-[#e84118] border-t-8 border-solid border-r-8 border-r-[transparent] border-l-8 border-l-[transparent] md:border-l-[#e84118] md:border-t-[transparent] md:border-b-8 md:border-b-[transparent] md:border-r-0 md:bottom-1/2 md:right-0 md:translate-x-full md:translate-y-1/2"></div>
        </div>
      )}
      <input
        {...field}
        {...props}
        className={`outline-none border-2 border-solid bg-primary w-full h-12 text-base rounded px-3 mb-3 text-color__primary  ${meta.touched && meta.error ? "border-[#e84118]":"border-bg__third focus:border-blue__color" } ${props.className}`}
      />
      {meta.touched && meta.error && (
        <i className={`error_icon absolute right-1 ${bottom?"top-[calc(50%-44px)]" :"top-[calc(50%+12px)]"}  scale-[0.8] md:top-1/2 md:-translate-y-[calc(50%+6px)]`}  />
      )}
      {meta.touched && meta.error && bottom && (
        <div className="relative py-3 px-2 bg-[#e84118] w-full text-[white] text-sm rounded mb-3 md:absolute md:-left-[21rem] md:top-[2.2px]">
          {<ErrorMessage name={field.name} />}
          <div className="absolute top-0 -translate-y-full border-[#e84118] border-b-8 border-solid border-r-8 border-r-[transparent] border-l-8 border-l-[transparent] md:border-l-[#e84118] md:border-t-[transparent] md:border-t-8 md:border-b-[transparent] md:border-r-0 md:bottom-1/2 md:right-0 md:translate-x-full md:translate-y-1/2 md:top-auto"></div>

        </div>
      )}
    </div>
  );
};

export default RegisterInput;
