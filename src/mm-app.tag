mm-app
  ons-page
    ons-toolbar
      .center Hello, Onsen UI
    p Hi {a.message()}

  script.
    class A {
      message() {
        return "there!";
      }
    }

    this.a = new A();
