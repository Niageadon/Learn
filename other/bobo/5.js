class Program {
	constructor(data) {
		this.program_id = data?.program_id
	}
	static getMergedProgram(structure, progress) {
		checkPrograms(structure, progress)
			.then(() => {
			
			})
		
		
		function checkPrograms(a, b) {
			return new Promise((resolve, reject) => {
				if(a.program_id !== b.program_id){
					reject("program_id is't match");
				}
				if(a.courses.length !== b.courses.length) {
					reject("blocks count is't match")
				}
				resolve()
			})
		}
	}
}
class ProgramStructure extends Program {
	constructor(data) {
		super(data);
		this.additional = data?.additional
		this.check_period_limit = data?.check_period_limit
		this.courses = (data?.courses || []).map(el => new ProgramBlockStructure(el))
		this.created_at = data?.created_at
		this.description = data?.description
		this.email_config_id = data?.email_config_id
		this.extraBlocks = data?.extraBlocks || []
		this.name = data?.name
		this.notes = data?.notes
		this.preview_id = data?.preview_id
		this.type = data?.type
	}
}
class ProgramProgress extends Program {
	constructor(data) {
		super(data);
		this.available_since_date = data?.available_since_date
		this.courses = (data?.courses || []).map(el => new ProgramBlockProgress(el))
		this.extraBlocks = data?.extraBlocks || []
		this.is_available_by_date = data?.is_available_by_date
		this.is_passed = data?.is_passed
		this.is_unlocked = data?.is_unlocked
		this.progress = data?.progress
		this.state = data?.state
	}
}



class ProgramBlock {
	constructor(data) {
		this.course_id = data?.course_id
	}
}
class ProgramBlockStructure extends ProgramBlock{
	constructor(data) {
		super(data)
		this.activities = (data?.activities || []).map(el => new BlockActivityStructure(el))
		this.additional = data?.additional
		this.created_at = data?.created_at
		this.img = data?.img
		this.name = data?.name
		this.tags = data?.tags
		this.type = data?.type
	}
}
class ProgramBlockProgress extends ProgramBlock{
	constructor(data) {
		super(data)
		this.activities = (data?.activities || []).map(el => new BlockActivityProgress(el))
		this.available_since_date = data?.available_since_date
		this.is_available_by_date = data?.is_available_by_date
		this.is_passed = data?.is_passed
		this.is_unlocked = data?.is_unlocked
		this.progress = data?.progress
		this.state = data?.state
	}
}


class BlockActivity {
	constructor(data) {
		this.activity_id = data?.activity_id
	}
	static mergeActivity
}
class BlockActivityStructure extends BlockActivity{
	constructor(data) {
		super(data)
		this.additional = data?.additional
		this.description = data?.description
		this.entity = data?.entity
		this.entity_type = data?.entity_type
		this.name = data?.name
	}
}
class BlockActivityProgress extends BlockActivity{
	constructor(data) {
		super(data)
		this.available_since_date = data?.available_since_date
		this.is_available_by_date = data?.is_available_by_date
		this.is_passed = data?.is_passed
		this.is_unlocked = data?.is_unlocked
		this.progress = data?.progress
		this.state = data?.state
	}
}

