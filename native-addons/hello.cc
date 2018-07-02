#include <napi.h>
#include <iostream>

Napi::String SayHello(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  std::cout << "I am in C++ \n";

  return Napi::String::New(env, "Hello from C++");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "hello"),
              Napi::Function::New(env, SayHello));
  return exports;
}

NODE_API_MODULE(hello, Init)