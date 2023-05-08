export default defineEventHandler(async (event) => {
  const { code } = event.context.params as any;
  const { kakaoKey } = useRuntimeConfig();
  console.log(code, kakaoKey);
  const uri = `https://${code}`;
  const { data } = await $fetch(uri);
  return data;
});
