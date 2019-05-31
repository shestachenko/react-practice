import {HashMapInterface} from "../../../../interfaces/hash-map.interface";

export default function(values: HashMapInterface<string>) {
  const errors: any = {email: ''};
  const requiredFields: string[] = [
    'name',
    'email',
  ];
  requiredFields.forEach((field: string) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}
