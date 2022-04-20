/**
 * 추상: 개별의 사물이나 표상의 공통된 속성이나 관계 따위를 뽑아냄
 * 추상클래스를 정의할 때는 class 앞에 abstract라고 표기합니다. 또한 추상 메서드를 정의할 때도
 * abstract를 메서드 이름 앞에 붙입니다. 추상 메서드는 정의만 있을 뿐 몸체(body)가 구현되어 있지 않습니다.
 * 몸체는 추상 클래스를 상속하는 클래스에서 해당 추상 메소드를 통해 필히 구현해야 합니다.
 *
 * 그리고 추상 클래스는 추상 메서드뿐만 아니라, 실사용이 가능한 메서드도 정의할 수 있습니다.
 * 추상 클래스를 상속하는 클래스를 통해 생성된 인스턴스는 이 메서드를 사용할 수 있습니다. 추상 클래스는 말 그대로
 * 추상이므로 클래스와 달리 인스턴스를 생성하지 않습니다. 생성 구문을 사용하면 오류가 발생합니다.
 */

// 추상 클래스
abstract class Project {
  public _project_name: string | null = null;
  private budget: number = 20000000;

  // 추상 메서드 정의
  public abstract changerProjectNmae(name: string): void;

  // 실제 메서드 정의
  public calcBudget(): number {
    return this.budget * 2;
  }
}

/**
 * 추상 클래스를 상속 받는다면 추상 클래스 내에 정의된 추상 메서드를 반드시 구현해야 합니다.
 */

class WebProject extends Project {
  public changerProjectNmae(name: string): void {
    this._project_name = name;
  }
}

let web_project = new WebProject();
console.log(web_project._project_name);
web_project.changerProjectNmae('스타트업 클라우드 솔루션 제공');
console.log(web_project._project_name);
