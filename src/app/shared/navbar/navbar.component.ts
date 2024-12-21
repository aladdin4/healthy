import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';
import { Router } from '@angular/router';
import { MainService } from '../../core/services/main.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   navbarVisibleSubscription: Subscription = new Subscription();
  permissions: string = '';

  retryCount = 0;
  maxRetries = 3;

  //solutions: SolutionDTO[] = [];
  logsSubscription: Subscription = new Subscription();
  constructor (
    private router: Router,
    private el: ElementRef,
    private mainService: MainService
  ) { }

  showSidebar = true;
  ngOnInit(): void {

    this.navbarVisibleSubscription = this.mainService.NavbarVisibleSubject.subscribe((isVisible: boolean) => {
      this.showSidebar = isVisible;
    });

    //this.jobsSubscription = this.jobsService.navBarExpandedSubject.subscribe((data: any) => {
    //  this.navbarExpanded = data;
    //  this.getUser();
    //});

    //this.userSubscription = this.userService.currentUserSubject.subscribe((data: any) => {
    //  this.user = data;
    //  if (!this.user.id && !this.user.loggingOut) {
    //    this.userService.getCurrentUser('updateCurrentUser');
    //  }
    //  if (this.user.permissions)
    //    this.permissions = this.user.permissions.join(',');
    //})

    //this.logsSubscription = this.logsService.logStoragesSubject.subscribe((data: any) => {
    //  if (!data.length && this.retryCount < this.maxRetries) {
    //    this.retryCount++;
    //    this.logsService.getLogStorages();
    //  }
    //  else {
    //    this.solutions = data;

    //    setTimeout(() => {
    //      this.setSolutionState();
    //    }, 0);
    //  }
    //});
  }

  ngOnDestroy(): void {
    //this.jobsSubscription.unsubscribe();
    //this.userSubscription.unsubscribe();
    //this.logsSubscription.unsubscribe();
  }
  getUser() {
    interval(1000).pipe(take(4)).subscribe((val) => {
      let userLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || "") : "";
      //this.user = new User(userLocalStorage)
      //if (val >= 3) {
      //  if (!userLocalStorage.id) {
      //    this.router.navigate(['/login']);
      //  } else {
      //    this.idleService.start();
      //  }
      //}
    });
  }

  navbarExpanded = true;
  sidebarMenus = {
    jobMenuExpanded: true,
    todayMenuExapnded: false
  }

  //for handling navbar collapse across instances of modules
  @ViewChild('navbar') navbar: any;
  ngAfterViewInit() {
    this.navbarExpanded ? this.navbar?.nativeElement.classList?.remove('navbar-vertical-collapsed') : this.navbar.nativeElement.classList?.add('navbar-vertical-collapsed');
    this.setNavBarStates();
  }

  //for sidebar navbar for large screens
  collapseNavbar(event: any) {
    if (event.classList.contains('navbar-vertical-collapsed')) {
      this.navbarExpanded = true;
      event.classList?.remove('navbar-vertical-collapsed');
    }
    else {
      this.navbarExpanded = false;
      event.classList?.add('navbar-vertical-collapsed');
    }
   // this.jobsService.toggleNavBar(this.navbarExpanded);
  }

  //for the full screen navbar for small screens
  toggleNavbar(event: any, close: boolean = false) {

    if (event.classList.contains('expand-width') || close) {
      event.classList?.remove('expand-width');
    }
    else {
      event.classList?.add('expand-width');
    }
    let top = document.getElementById("top");
    let val = top?.classList.contains('navbar-vertical-collapsed');
    if (val) {
      top?.classList?.remove('navbar-vertical-collapsed');
      this.navbarExpanded = true;
      //this.jobsService.toggleNavBar(this.navbarExpanded);
    }
  }


  //for the small menus
  togglePanel(event: any) {
    if (event.classList.contains('d-none')) {
      event.classList?.remove('d-none');
    }
    else {
      event.classList?.add('d-none');
    }
  }

  //for the side menus expansion
  @ViewChild('jobswrapper') jobswrapper: ElementRef = {} as ElementRef;
  @ViewChild('dashboardwrapper') dashboardwrapper: ElementRef = {} as ElementRef;
  @ViewChild('settingswrapper') settingswrapper: ElementRef = {} as ElementRef;
  @ViewChild('powerbiwrapper') powerbiwrapper: ElementRef = {} as ElementRef;
  @ViewChild('logsWrapper') logsWrapper: ElementRef = {} as ElementRef;

  setNavBarStates() {
    const jobsClasses = this.jobswrapper?.nativeElement.classList;
    const dashboardClasses = this.dashboardwrapper?.nativeElement.classList;
    const settingsClasses = this.settingswrapper?.nativeElement.classList;
    const powerbiClasses = this.powerbiwrapper?.nativeElement.classList;
    const logsClasses = this.logsWrapper?.nativeElement.classList;

    //if (this.jobsService.navBarStates.jobExpanded) {
    //  jobsClasses?.add('jobs-expanded');
    //}
    //else {
    //  jobsClasses?.remove('jobs-expanded');
    //}

    //if (this.jobsService.navBarStates.dashboardExpanded) {
    //  dashboardClasses?.add('dashboard-expanded');
    //  jobsClasses?.add('jobs-dashboard-expanded');
    //}
    //else {
    //  dashboardClasses?.remove('dashboard-expanded');
    //}

    //if (this.jobsService.navBarStates.settingsExpanded) {
    //  settingsClasses?.add('settings-expanded');
    //}
    //else {
    //  settingsClasses?.remove('settings-expanded');
    //}

    //if (this.jobsService.navBarStates.powerBiExpanded) {
    //  powerbiClasses?.add('settings-expanded');
    //}
    //else {
    //  powerbiClasses?.remove('settings-expanded');
    //}


    //if (this.jobsService.navBarStates.logsExpanded) {
    //  logsClasses?.add('logs-expanded');
    //}
    //else {
    //  logsClasses?.remove('logs-expanded');
    //}
  }

  toggleJobs() {
    const jobsClasses = this.jobswrapper?.nativeElement.classList;
    const dashboardClasses = this.dashboardwrapper?.nativeElement.classList;
    //if (this.jobsService.navBarStates.jobExpanded) {
    //  jobsClasses?.remove('jobs-expanded');
    //  jobsClasses?.remove('jobs-dashboard-expanded');
    //  dashboardClasses?.remove('dashboard-expanded');
    //  this.jobsService.navBarStates.jobExpanded = false;
    //  this.jobsService.navBarStates.dashboardExpanded = false;
    //}
    //else {
    //  jobsClasses?.add('jobs-expanded');
    //  this.jobsService.navBarStates.jobExpanded = true;
    //}
  }

  toggleDashboard() {
    const jobsClasses = this.jobswrapper?.nativeElement.classList;
    const dashboardClasses = this.dashboardwrapper?.nativeElement.classList;
    //if (this.jobsService.navBarStates.dashboardExpanded) {
    //  dashboardClasses?.remove('dashboard-expanded');
    //  jobsClasses?.remove('jobs-dashboard-expanded');
    //  jobsClasses?.add('jobs-expanded');
    //  this.jobsService.navBarStates.dashboardExpanded = false;
    //}
    //else {
    //  dashboardClasses?.add('dashboard-expanded');
    //  jobsClasses?.add('jobs-dashboard-expanded');
    //  jobsClasses?.remove('jobs-expanded');
    //  this.jobsService.navBarStates.dashboardExpanded = true;
    //}
  }
  toggleSettings() {
    const settingsClasses = this.settingswrapper?.nativeElement.classList;
    //if (this.jobsService.navBarStates.settingsExpanded) {
    //  settingsClasses?.remove('settings-expanded');
    //  this.jobsService.navBarStates.settingsExpanded = false;
    //}
    //else {
    //  settingsClasses?.add('settings-expanded');
    //  this.jobsService.navBarStates.settingsExpanded = true;
    //}
  }
  togglePowerBi() {
    const powerbiClasses = this.powerbiwrapper?.nativeElement.classList;
    //if (this.jobsService.navBarStates.powerBiExpanded) {
    //  powerbiClasses?.remove('settings-expanded');
    //  this.jobsService.navBarStates.powerBiExpanded = false;
    //}
    //else {
    //  powerbiClasses?.add('settings-expanded');
    //  this.jobsService.navBarStates.powerBiExpanded = true;
    //}
  }

  toggleLogs() {
    const logsClasses = this.logsWrapper?.nativeElement.classList;
    //if (this.jobsService.navBarStates.logsExpanded) {
    //  logsClasses?.remove('logs-expanded');
    //  this.jobsService.navBarStates.logsExpanded = false;
    //}
    //else {
    //  logsClasses?.add('logs-expanded');
    //  this.jobsService.navBarStates.logsExpanded = true;
    //}
  }
  isActive(base: string) {
    return this.router.url.includes(`/${base}`);
  }

  toggleSolution(solutionIndex: number) {
    //let solution = this.solutions[solutionIndex];
    //const solutionElement = this.el.nativeElement.querySelectorAll('.solution-wrapper')[solutionIndex];
    //solution.expanded = !solution.expanded;
    //if (!solution.expanded) {
    //  solutionElement.style.height = '0rem';
    //}
    //else {
    //  solutionElement.style.height = (this.solutions[solutionIndex].storages.length * 1.8) + 'rem';
    //}

  }
  openStorage(solutionIndex: number, storageIndex: number) {
    //let solution = this.solutions[solutionIndex];
    //solution.solution = solution.solution.replace(/\s/g, '-');

    //let storage = solution.storages[storageIndex];
    //storage.name = storage.name.replace(/\s/g, '-');

    //if (storage.name.includes('Error')) {
    //  this.router.navigate(['/logs/app-errors/' + solution.solution.toLowerCase() + '/' + storage.name.toLowerCase()]);
    //}
    //else {
    //  this.router.navigate(['/logs/app-logs/'+ solution.solution.toLowerCase() + '/' + storage.name.toLowerCase()]);;
    //}
  }

  setSolutionState() {
    //this.solutions.forEach((solution, index) => {
    //  const solutionElement = this.el.nativeElement.querySelectorAll('.solution-wrapper')[index];
    //  if (solution.expanded) {
    //    solutionElement.style.height = (this.solutions[index].storages.length * 1.8) + 'rem';
    //  }
    //});
  }
  

  checkActiveSolution(index: number) {
    //return this.router.url.includes(solution.name.toLowerCase());
  }
  checkActiveStorage(index: number) {
    //return this.router.url.includes(storage.name.toLowerCase());
  }
  checkActiveStage(index: number) {
    //return this.router.url.includes(stage.name.toLowerCase());
  }
  smallVerticalPanelCollapsed : boolean = true;


  showPanel(event: any) {
    if (!this.navbarExpanded) {
      event.classList?.remove('d-none');
    }
    else {
      event.classList?.add('d-none');
    }
  }

  hidePanel(event: any) {
    event.classList?.add('d-none');
  }
  logOut() {
   // this.authService.logOut();
  }
}