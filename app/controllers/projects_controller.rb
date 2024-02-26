class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def index
    @projects = Project.all

    # Move "Side projects" to the end of the collection
    side_projects = @projects.select { |project| project.title == "Side projects" }
    @projects = @projects - side_projects + side_projects
  end

  def show
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to project_path(@project)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @project.update(project_params)
      redirect_to project_path(@project)
    else
      render :new, status: :unprocessable_entity # is it the right one to use?
    end
  end

  def destroy
    @project.destroy
    redirect_to projects_path, status: :see_other
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :summary, :description, :photo)
  end
end
