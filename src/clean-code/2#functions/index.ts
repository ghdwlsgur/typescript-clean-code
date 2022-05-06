/**
 * To make it obvious what properties the function expects,
 * you can use the destructuring syntax.
 */

function createMenuBad(
  title: string,
  body: string,
  buttonText: string,
  cancellable: boolean,
) {
  //
}

createMenuBad('Foo', 'Bar', 'Baz', true);

function createMenuGood(options: {
  title: string;
  body: string;
  buttonText: string;
  cancellable: boolean;
}) {
  //
}

createMenuGood({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true,
});

// You can further improve readability by using type aliases

type MenuOptions = {
  title: string;
  body: string;
  buttonText: string;
  cancellable: boolean;
};

function createMenu(options: MenuOptions) {}

/**
 * Functions should do one thing
 *
 * This is by far the most important rule in software engineering.
 * When functions do more than one thing, they are harder to compose,
 * test, and reason about. When you can isolate a function to just one action,
 * it can be refactored easily and your code will read much cleaner.
 * If you take nothing else away from this guide other than this, you'll be
 * ahead of many developers.
 */

/*
function emailActiveClientsBad(clients: Client[]) {
  clients.forEach(client) => {
    const clientRecord = database.lookup(client);
    if(clientRecord.isActive()) {
      email(client);
    }
  }
}
*/

/*
function emailActiveClientsGood(clients: Client[]) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client: Client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
*/
