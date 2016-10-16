mm-app
  p Hi {a.message()}

  script.
    class A {
      message() {
        return "there!";
      }
    }

    this.a = new A();
